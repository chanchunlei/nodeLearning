const b = require('./b');
const fs = require('fs');
console.log(b.foo);
console.log(b.age);
b.readFile('./a.js');
fs.readFile('./a.js', function(err, data){
    if(err) {
        console.log('加载失败')
    }else {
        console.log(data.toString());
    }
})