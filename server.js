let http = require('http');
let url = require('url');
let port = process.argv[2];

if (!port) {
    console.log('请指定端口号');
    process.exit(1);
}
let server = http.createServer(function (req, res) {
    let params = url.parse(req.url, true)
    let pathWithQuery = req.url
    console.log(params)
    let path = params.pathname
    let query = params.query
    console.log('有请求发送过来了！路径是' + pathWithQuery)

    if (path === '/') {
        console.log('111111')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write(`
        <!DOCTYPE html>
        <html>
        <head>
        <link rel="stylesheet" href="/style">
        </head>
        <body>
        <p>hello</p>
        </body>
        </html>
        `)
        res.end()
    } else if (path === '/style') {
        console.log('2222222')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css;charset=utf-8')
        res.write(`p{color:red}`)
        res.end()
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write('您输入的路径不存在')
        res.end()
    }

})

server.listen(port)
console.log('监听' + port + '成功\n请打开http://localhost:' + port)