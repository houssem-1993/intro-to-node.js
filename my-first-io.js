const fs = require('fs');
 var a = fs.readFileSync(process.argv[2])  
console.log(a.toString().split('\n').length-1)