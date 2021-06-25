var EventEmitter = require("events").EventEmitter;
var eventEmitter = new EventEmitter();

//不带参数
eventEmitter.on("some_event",function(){
    console.log("some_events 事件触发");
})
setTimeout(function(){
    eventEmitter.emit("some_event");
},1000);






//带参数
eventEmitter.on("some_event_args",function(arg1,arg2){
    console.log("listener1",arg1,arg2);
});


eventEmitter.on("some_event_args",function(arg1,arg2){
    console.log("listener2",arg1,arg2)
});

eventEmitter.emit("some_event_args","arg1参数","arg2参数");








//listener 绑定
var listener1 = function listener1(){
    console.log("监听器 listener1 执行");
}

var listener2 = function listener2(){
    console.log("监听器 listener2 执行");
}

//绑定connection事件
eventEmitter.addListener("connection",listener1);
eventEmitter.addListener("connection",listener2);


var listenerCount = eventEmitter.listenerCount("connection");
console.log(listenerCount+" 个监听器监听连接事件");

//触发connection事件
eventEmitter.emit("connection");

//移除绑定listener1 函数
eventEmitter.removeListener("connection",listener1);
console.log("listener1 不再受监听");

//触发connection事件
eventEmitter.emit("connection");


//error 事件
eventEmitter.emit("error");