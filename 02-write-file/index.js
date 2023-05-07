const fs = require("fs");
const path = require("path");
const writeStream = fs.createWriteStream(path.join(__dirname, "yourname.txt"));
const {stdin, stdout} = require('process');

const startText = 'Привет! Напишите ваше имя\n';
const finishText = '\nПриятно было познакомиться! Удачи в учебе!';

stdout.write(startText)

stdin.on("data", (data) => {
  if (data.toString().trimEnd() === "exit") {
    process.exit();
  }
  writeStream.write(data);
})

process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write(finishText));