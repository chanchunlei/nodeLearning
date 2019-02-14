const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request', function(req, res){
    if(req.url === '/'){
        fs.readFile('path', function(err,data) {
            if(err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('文件读取失败，稍后再试');
            }else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(data);
            }
        })
        //普通文本text/plain

    }else if(req.url === '/html'){
        //html标签text/html
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h2>hello!!!真好</h2>')
    }
})
server.listen(3000, function() {
    console.log('服务器已开');
})