const fs = require("fs");

fs.mkdir("./test", (err) => {
  console.log(err);
});

// 递归读取
function readDir(name) {
  fs.readdir(name, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        console.log("item是一个文件夹", item.name);
        readDir(`${name}/${item.name}`);
      } else {
        console.log("item是一个文件", item.name);
      }
    });
  });
}

// 读取文件夹
// 获取文件的字符串
readDir("./test");

// 文件重命名
fs.rename('./test','./txt',(err)=>{
    console.log(err);
})