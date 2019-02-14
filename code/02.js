//使用node构建一个服务器
//node中提供了一个核心模块：http
//http这个模块的职责就是帮你创建编写服务器的

//1. 加载http核心模块
const http = require('http');
//2.使用http.createServer()方法创建一个 Web 服务器
// 返回一个Server实例
const server = http.createServer();
//3.服务器要干嘛？
// 提供服务： 对数据的服务
// 发请求
// 接收请求
// 处理请求
// 给个反馈（发送响应）
// 注册request请求事件
// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数


//request 请求事件处理函数，需要接收两个参数：
//  Request 请求对象
//    请求对象可以用来获取客户端的一些请求信息，例如请求路径
//  Response 响应对象
//    响应对象可以用来给客户端发送响应消息
server.on('request', function(request,response) {
    // http://127.0.0.1:3000/
    // http://127.0.0.1:3000/a/a
    // http://127.0.0.1:3000/foo/b
    console.log(`请求路径是:${request.url}`);

    //response 对象有一个方法：write 可以用来给客户端发送响应数据
    //write 可以使用多次，但是最后一次一定要使用 end 来结束响应，否则客户端会一直等待
    response.write('hello');
    response.write('node');
    response.end();

})
//4.绑定端口号，启动服务器
server.listen(3000, function() {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 求来进行访问');
});