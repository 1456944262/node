// node.js函数
function say(){
    console.log("word");
}

function execute(someFunction,value){
    someFunction(value);
}

execute(say,"hello");

// 匿名函数
function execute2(someFunction,value){
    someFunction(value);
}

execute2(function (value){
  console.log(value+" "+"world")
},"hello");