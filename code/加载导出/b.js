const foo = 'bbb';
exports.foo = 'hello';
const age = 14;
exports.age = age;
exports.readFile = function(path, callback){
    console.log(`文件路径${path}`)
}