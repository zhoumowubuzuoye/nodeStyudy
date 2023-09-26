const fs = require("fs");

/**
 * 1.同步操作
 * encoding编码格式
 */
const res1 = fs.readFileSync("./b.txt", { encoding: "utf-8" });
/**
 * 2.异步读取文件
 */
fs.promises
  .readFile("./b.txt", { encoding: "utf-8" })
  .then((res) => {})
  .catch((err) => {});

/**
 * 3.异步回调函数操作文件
 */
fs.readFile("./bb.txt", { encoding: "utf-8" }, (error, res) => {
  error ? console.log(error) : console.log(res);
});

fs.open("./b.txt", (err, fd) => {
  if (err) {
    return;
  }
  fs.fstat(fd, (err, stats) => {
    if (err) return;
    fs.close(fd, (err) => {});
  });
});

fs.writeFile("./bb.txt", "next weak", { encoding: "utf-8" ,flag:'r+'}, (err) => {
  if (err) return console.log("写入错误", err);
  console.log("写入成功");
});
