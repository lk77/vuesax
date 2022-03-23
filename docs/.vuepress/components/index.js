const fs = require("fs");
const path = require("path");

let Demos = path.join(__dirname, "Demos");
let contributors = path.join(__dirname, "contributors");
let componentsDir = path.join(__dirname);

let components = {};

let handleFile = (filepath, filename, prefix) => {
  if(filename.endsWith('.vue')) {
    components[(prefix ? (prefix + '-') : '') + filename.split('.')[0]] = path.resolve(__dirname, filepath);
  }
}

let handleDir = (dir, prefix, recursive = false, ) => {
  fs.readdirSync(dir).forEach((file) => {
    if (fs.lstatSync(dir + '/' + file).isDirectory()) {
      if(recursive) {
        let dirPrefix;
        if(prefix) {
          dirPrefix = prefix + '-' + file
        }
        handleDir(dir + '/' + file, dirPrefix);
      }
    } else {
      handleFile(dir + '/' + file, file, prefix);
    }
  })
}

handleDir(Demos, 'Demos', true);
handleDir(contributors, null, true);
handleDir(componentsDir);

module.exports = components;

