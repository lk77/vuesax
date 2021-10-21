const fs = require("fs");
const path = require("path");

let theme = path.join(__dirname);

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

handleDir(theme);

module.exports = {
  extend: '@vuepress/theme-default',
  layouts: components
}

