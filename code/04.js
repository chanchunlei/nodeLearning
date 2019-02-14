const http = require('http');
const server = http.createServer();
server.on('request', function(req, res){
    if(req.url === '/'){
        //普通文本text/plain
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('hello!!!真好')
    }else if(req.url === '/html'){
        //html标签text/html
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h2>hello!!!真好</h2>')
    }
})
server.listen(3000, function() {
    console.log('服务器已开');
})