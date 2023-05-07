const fs = require('fs');
const path = require('path');

const resdStream = fs.createReadStream(path.join(__dirname, '.\\text.txt'), 'utf-8');

resdStream.on("data", (chunk) => console.log(chunk))
