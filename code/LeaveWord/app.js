const http = require('http');
const fs = require('fs');
const url = require('url');
const template = require('art-template');
let obj = [
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2018-02-04'
    },{
        name: '张三',
        message: '今天天气不错',
        dateTime: '2018-02-04'
    },{
        name: '张三',
        message: '今天天气不错',
        dateTime: '2018-02-04'
    },{
        name: '张三',
        message: '今天天气不错',
        dateTime: '2018-02-04'
    },{
        name: '张三',
        message: '今天天气不错',
        dateTime: '2018-02-04'
    }
]
http
    .createServer(function(req, res) {
        const parseObj = url.parse(req.url, true);
        const pathName = parseObj.pathname;
        if( pathName === '/' ) {
            fs.readFile('./views/index.html', function(err, data){
                if(err) {
                    return res.end('404 Not Found.')
                }
                const htmlStr = template.render(data.toString(), {
                    obj: obj
                });
                res.end(htmlStr);
            })
        }else if(pathName === '/post') {
            fs.readFile('./views/post.html', function(err, data){
                if(err) {
                    return res.end('404 Not Found.');
                }
                res.end(data);
            });
        }else if(pathName === '/pinglun'){
            let comment = parseObj.query;
            comment.dateTime = '2018-05-07';
            obj.unshift(comment);
            //服务端重定向
            // 1. 状态码设置为302临时重定向（statusCodu）
            // 2. 在响应头中通过Location（setHeader）
            //如果客户端发现收到服务器的响应状态码是302就会自动去响应头中找Location
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        }else if(pathName.indexOf('/public/') === 0) { //加载静态资源
            fs.readFile(`.${pathName}`, function(err, data){
                if(err) {
                    return res.end('404 Not Found.');
                }
                res.end(data);
            });
        }else {
            fs.readFile('./views/404.html', function (err, data) {
                if(err) {
                    return res.end('404 Not Found.');
                }
                res.end(data);
            })
        }
    })
    .listen(3000, function () {
        console.log('running');
    })