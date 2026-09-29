const fs=require('fs');
fs.writeFile(
'sample.text','Welcome to full stack developement',(err)=>{
if (err){
console.log('Error creating file',err);
return;
}
console.log('File created successfully');
}
}
fs.readFile('sample.text','utf8',(err,data)=>{
if (err){
console.log('Error reading the file:',err);
return;
}


// Save these in the word file