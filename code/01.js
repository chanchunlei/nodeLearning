//fs.readFile就是用来读取文件
//1.使用require方法加载fs核心模块
const fs = require('fs');
//2.读取文件
// 第一个参数是要读取的文件路径
// 第二个参数是一个回调函数
//  成功
//   data就是读取到的数据
//   error就是null
//  失败
//   error就是错误对象
//   data null
fs.readFile('./data/hello.txt', function(error, data){
    console.log(data.toString());
})

//写文件
//第一个参数：文件路径
//第二个参数：文件内容
//第三个参数：回调函数
//  成功
//   error就是null
//  失败
//   error就是错误对象
fs.writeFile('./data/hello.md','大家好', function(error){
    if(error) {
        console.log('文件写入失败');
    }else {
        console.log('文件写入成功');
    }
})
