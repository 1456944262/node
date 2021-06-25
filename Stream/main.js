var fs = require("fs");
var Hello = require("../helloworld");
var data='';

// 模块系统，方法调用
Hello.println("aaa");


var hello2 = new Hello();
hello2.setName("yangjin");
hello2.sayHello();

// 从流中读取数据
// var readStream = fs.createReadStream("input.txt");
// readStream.setEncoding("UTF8");
// readStream.on("data",function(chunk){
//     data+=chunk;
// })

// readStream.on("end",function(){
//     console.log(data);
// });

// readStream.on("error",function(err){
//     console.log(err.stack)
// });
// console.log("程序执行完毕")






// //写入流
// var data1 = "菜鸟教程官网地址：www.runoob.com";
// var writerStream = fs.createWriteStream("output.txt")
// //写入数据
// writerStream.write(data1);
// //标记文件末尾
// writerStream.end();

// writerStream.on("finish",function(){
//     console.log("写入完成。");
// });

// writerStream.on("error",function(error){
//     console.log(error.stack);
// });
// console.log("程序执行完毕");






// //管道流
// var  readPip = fs.createReadStream("input.txt");

// var writePip = fs.createWriteStream("output.txt");

// //管道写操作
// //读取input.txt 文件内容写入outPut.txt中
// readPip.pipe(writePip);
// console.log("程序执行完成");




//链式流
//  var zlib = require("zlib");
// // fs.createReadStream("input.txt").
// //  pipe(zlib.createGzip()).
// //  pipe(fs.createWriteStream("input.txt.gz"));

// fs.createReadStream("input.zip").
//   pipe(zlib.createGunzip())
//  .pipe(fs.createWriteStream("input.txt"));