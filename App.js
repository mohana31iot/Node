// console.log("Hi Mohana Welcome to Node.js")
// Global Object
setTimeout (function (){
    console.log ("Hi you are doing well! keep going");
},3000);
// var time =0;
// setInterval (function () {
//     time +=5;
//     console.log(time +'seconds have passed');
// },2500);
// console.log(__dirname);
// console.log(__filename);
// var demo1=function(){
//     console.log("Hi! Welcome to Node js");
// }
// demo1();

// Function Expression

function callfunction(fun)
{
    fun();
}
var demo1=function(){
    console.log("This is my frist try in Node js")
}
callfunction(demo1);

// Modules & require()
var counter=function(arr){
    return 'There are' + arr.length +'fruit names in the array';
}
// console.log(counter(['Mango','Pineapple','Jackfruit','Papaya','Orange']));

var multiply = function (a,b) {
    return `The multiplication of the 2 number is ${a*b}`;
}

// Module Patterns
module.exports.counter=function(arr){
    return 'There are' + arr.length +'fruit names in the array'; 
}

module.exports.multiply=function(a,b){ return `The multiplication of the 2 number is ${a*b}`;

}
// Module Patterns
// module.exports.counter=counter;
// module.exports.multiply=multiply;

//  module.exports={
// counter:counter,
// multiply:multiply
// };