// const f =require('fs');
// var myReadStream = f.createReadStream(__dirname+'/document.txt','utf8');
// myReadStream.on('data',function(chunk){
//     console.log('New DataReceived:');
//         console.log(chunk);
    
//     })

// const f = require('fs')
// var WriteStream = f.createWriteStream(__dirname+'/document.txt',{flags:'a'});
// for(let i=0;i<100;i++){
//     WriteStream.write(`Line${i+1}:
//         Dummy data for testing streams.\n`);
// }
// WriteStream.end(() =>{
//     console.log("Dummy file created!")
// });

const f = require('fs')
var WriteStream = f.createWriteStream(__dirname+'/file.txt','utf8');
for(let i=0;i<100;i++){
    WriteStream.write(`Line${i+1}:
        Dummy data for testing streams.\n`);
}
WriteStream.end(() =>{
    console.log("Dummy file created!")
});