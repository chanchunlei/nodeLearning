const http = require('http');
const fs = require('fs');
const server = http.createServer();
const wwwDir = 'D:/www';
const template = require('art-template');
server.on('request', function(req, res) {
    const url = req.url;
    //if(req.url === '/'){
    fs.readFile('./template.html', function(err, data){
        if(err) {
            res.end('404 Not Found!');
        }
        fs.readdir(wwwDir, function(err, files) {
            if(err) {
                return res.end('Can not find www dif.')
            }
            let htmlStr = template.render(data.toString(), {
                title: '目录',
                files: files
            })
            res.end(htmlStr);
        })
    })
    //}else {
    //res.end('404 Not Found!');
    //}
})
server.listen(3000, function() {
    console.log('服务器已开！');
})