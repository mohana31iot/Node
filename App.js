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
// Module export counter
//  module.exports.counter = function(name)
//  {
//      console.log(`My sister Name is ${name}`);
//  };
//  module.exports.Name = function(){
//      console.log ("Hemavathy")
//  };


// var events = require('events');
// var myEmitter = new events.EventEmitter();
// myEmitter.on("someEvent",function(msg){
//     console.log(msg);
// });
//  myEmitter.emit('someEvent','The event was emitted')

// Util Inherits

var events = require ('events');
var util = require ('util');
var person = function(name) {
    this.name = name;
}

util. inherits(person, events.EventEmitter);

    var A = new person ('Mohana');
    var B = new person ('Jayaraj');
    var C = new person ('Vijay');
    var people = [A, B, C];

    people.forEach(function(person){
        person.on('speak',function(msg){
            console.log(person.name + ' said ' +msg);
        })
    })
 B.emit('speak', 'Hello Every one');
 A.emit('speak', 'Hey Buddy');
 C.emit('speak', 'Think Positive');
