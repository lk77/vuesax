const fs = require("fs");
const path = require("path");


let Demos = path.join(__dirname, "Demos");
let contributors = path.join(__dirname, "Demos");

let components = {};

let handleFile = (filepath, filename) => {
  if(filename.endsWith('.vue')) {
    components[filename.split('.')[0]] = path.resolve(__dirname, filepath);
  }
}

let handleDir = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    if (fs.lstatSync(dir + '/' + file).isDirectory()) {
      handleDir(dir + '/' + file);
    } else {
      handleFile(dir + '/' + file, file);
    }
  })
}

handleDir(Demos);
handleDir(contributors);


module.exports = components;

