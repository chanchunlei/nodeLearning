const http = require('http');
const fs = require('fs');
const server = http.createServer();
const wwwDir = 'D:/www';
server.on('request', function(req, res) {
    if(req.url === '/'){
        fs.readFile(`${wwwDir}/index.html`, function(err, data){
            if(err) {
                res.end('404 Not Found!');
            }else {
                res.end(data);
            }
        })
    }else {
        res.end('404 Not Found!');
    }
})
server.listen(3000, function() {
    console.log('服务器已开！');
})