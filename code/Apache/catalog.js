const http = require('http');
const fs = require('fs');
const server = http.createServer();
const wwwDir = 'D:/www';
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
            let content = '';
            files.forEach(function(item) {
                content += `
                    <tr>
                        <td data-value="huawei/"><a class="icon dir" href="/D:/www/huawei/">${item}/</a></td>
                        <td class="detailsColumn" data-value="0"></td>
                        <td class="detailsColumn" data-value="1550218133">2019/2/15 下午4:08:53</td>
                    </tr>
                `;
            })
            data = data.toString();
            data = data.replace('^_^', content);
            res.end(data);
        })
    })
    //}else {
        //res.end('404 Not Found!');
    //}
})
server.listen(3000, function() {
    console.log('服务器已开！');
})