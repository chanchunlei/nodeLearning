const template = require('art-template');
const fs = require('fs');
fs.readFile('./tpl.html', function(err, data) {
    if(err) {
        return console.log(err);
    }
    let ret = template.render(data.toString(), {
        title: '个人信息',
        name: 'lucy',
        age: 18,
        proviece: 'shanghai',
        hobbies: ['写代码','唱歌','玩游戏']
    })
    console.log(ret)
})