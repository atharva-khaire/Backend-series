in this i have learn fs.js files module 


const fs = require('fs)


// create an new file via  write file 
fs.Writefile("c.txt","hey how are your", function(err)){
  if(err) return console.error(err);
  else return console.log("done");
}


// create an new file
fs.appendfile("c.txt", "i am fine", function(err)){
  if(err) return console.error(err);
  else return console.log("done");
}

// to copy file
fs.copyfile("c.txt", "copy.txt", function(err)){
  if(err) return console.error(err);
  else return console.log("done");
} 
            
// delete an dir
fs.rm(
