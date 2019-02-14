const http = require('http');
const server = http.createServer();
server.on('request', function(req, res){
    // res.write('hello');
    // res.write('hello node!');
    // res.end();
    // res.end('hello world');
    const url = req.url;
    if(url === '/' || url === '/home') {
        res.end('home')
    }else if (url === '/login') {
        res.end('login pages')
    }else if (url === '/detail') {
        let obj = [
            {
                id: 1,
                name: '苹果'
            },
            {
                id: 2,
                name: '华为'
            },
            {
                id: 3,
                name: '三星'
            },
            {
                id: 4,
                name: '小米'
            }
        ];

        res.end(JSON.stringify(obj))
    }else {
        res.end('404');
    }

})
server.listen(3000, function() {
    console.log('服务器已启动，可以访问了');
})