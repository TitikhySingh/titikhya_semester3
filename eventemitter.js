const EventEmitter=require('events');
const myEmitter= new EventEmitter();
myEmitter.on("greet",(name)=>{
    console.log(`Hello,$(name)! Welcome to Node.js
});
myEmitter.on('exit',()=>{
    console.log("Application closed");
);

yEmitter.emit('greet','2nd year');
yEmitter.emit('exit');


// on method is used  for
// emit is used to trigger 
//  on m we have to use "" and in emit we have to backtick that is `