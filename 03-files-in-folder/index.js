const path = require("path");
const fs = require("fs");
const secretFolder = path.join(__dirname, "secret-folder");

fs.readdir(secretFolder, (err, files) => {
  files.forEach((el) => {
    const updateEl = el.replace(".", " - ");
    fs.stat(path.join(secretFolder, el), (err, stats) => {
      if (stats.isFile()) 
      console.log(`${updateEl} - ${stats.size} byte`);
    })
  })  
})