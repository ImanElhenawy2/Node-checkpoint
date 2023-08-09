const fs = require("fs");

fs.readFile("welcome.txt",(err, data) =>  {
    if (err) return console.log(404);

    console.log(data.toString());  
})