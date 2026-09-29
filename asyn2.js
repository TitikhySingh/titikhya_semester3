// append
fs.appendFile('sample.text','\nSemester: 3',(err)=>{
    if (err){
        console.log('Error updating the file:'err);
    }else{
        console.log('\n3.File updated successfully!');
    }
})


// updated read
fs.readFile('sample.txt','utf8',(err,data)=>{
    if (err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('File content:');
    console.log(data);
})

// fs.unlink('example.txt',(err)=>{    })