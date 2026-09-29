// Delete
/*
const { fstat } = require("node:fs");

 fstat.unlink('example.txt',(err)=>{
    if(err){
        console.error('Error deleting the file:',err);
    }
    else{
        // else karke bhi kuch tha yaha
    }
 })

 CREATE A NEW FILE FOR DELETION, DON'T DELETE THE ORIGINAL FILE
*/
// 
const fs = require("fs").promises;

async function writeFile(){
    try {
        await fs.writeFile("promise.txt","Hello Students!");
        console.log("File created and data written successfully.");
    }
    catch(error)
{
    console.log("Error:",error);
}}
writeFile();


// update
async function appendFile() {
    try{
        await fs.appendFile("promise.txt","\nWelcome to FSD training")
        console.log("Data appended successfully.");
    }catch(error){
        console.log("Error:",error);
    }
    
}

appendFile();


// rename
async function renameFile() {
    try{
        await fs.renameFile("promise.txt","promise_new.txt");
        console.log("File renamed successfully.");
    }catch(error){
        console.log("Error:",error);
    }
    
}
