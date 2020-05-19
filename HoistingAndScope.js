//Hoisting
//javascript will automatically 'hoist' var variables and functions to the top before execution

sayHello("Hi There");

function sayHello(greeting){
    console.log(greeting);
}

//try to avoid for the most part to avoid confusion and obscure bugs

//Scope
//The scope a a variable is the code block it is defined inside of i.e. the {}
function sayGoodbye(farewellMessage){
    let MyScopedVariable = "Hi";
    console.log(farewellMessage);
}
console.log(sayGoodbye("See Ya!"));
console.log(myScopedVariable)
