var events = require("events");
var fs = require("fs")

//创建 EventEmitter对象
var eventEmitter = new events.EventEmitter();


//创建事件处理程序
var connectHandler = function  connected(){
    console.log("连接成功");
    // 触发data_received事件
    eventEmitter.emit("data_received");
}
//绑定 connection 事件处理程序
eventEmitter.on("connection",connectHandler);



//使用匿名函数绑定data_recived事件
eventEmitter.on("data_received",function (){
    console.log("数据接收成功");
})

//触发connection 事件
eventEmitter.emit("connection")
console.log("程序执行结束")


// 执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。
var data = fs.readFile("input.txt",function(err,data){
    if(err){
        console.log(err.stack)
        return;
    }
    console.log(data.toString());
});
console.log("程序执行结束");


