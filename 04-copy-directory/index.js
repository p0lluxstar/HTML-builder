const fs = require('fs');
const path = require('path');

const pathOldFolder = path.join(__dirname, 'files');
const pathNewFolder = path.join(__dirname, 'files-copy');

fs.rm(pathNewFolder, { recursive: true, force: true }, (err) => {
  fs.mkdir(pathNewFolder, { recursive: true }, (err) => {
    fs.readdir(pathOldFolder, (err, files) => {

      files.forEach((el) => {
        const pathOldfile = path.join(pathOldFolder, el);
        const pathNewfile = path.join(pathNewFolder, el);
        
        fs.copyFile(pathOldfile , pathNewfile, (err) => {
        });
      });
    });
  });
});