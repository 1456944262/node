
//export 暴露方法
var println = function (arg){
    console.log("Hello World")
}

var println2 = function (arg){
    console.log("Hello World")
}

function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    };

    this.sayHello = function(){
        console.log('Hello ' + name); 
    };
};

// module.exports=Hello;
// console.log(module.exports);
// console.log(exports)


// module.exports.println=println;
// console.log(module.exports);
// console.log(exports)



// exports.println2=println2;
// console.log(module.exports);
// console.log(exports)


// module.exports=Hello;
// console.log(module.exports);
// console.log(exports)


console.log('1=', module.exports); // 结果为：{}
console.log('2=', exports); // 结果为：{}

exports.a = 200; // 由于默认 exports=module.exports 故此时把module.exports的值也改变了 {a : 200}

console.log('3=', module.exports) // {a : 200}
console.log('4=', exports) // {a : 200}

exports = '我不在指向module'

console.log('5=', module.exports) // {a : 200}
console.log('6=', exports) // 我不在指向module






