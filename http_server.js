const http = require('http');
const fs = require('fs')
const path = require('path')
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)

    const promisfy = () => {
        console.log(`this is my js promise to learn in 5000`)
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
    }

    // promisfy().then(() => {
    //     return promisfy()
    // }).then(() => {
    //     return promisfy()
    // }).then(() => {
    //     return promisfy()
    // }).then(data => {
    //     console.log(`this is my js promise finished ${data}`)
    // })

    Promise.all([
        promisfy(),
        promisfy(),
        promisfy(),
        promisfy()
    ]).then(() => {
        var a, b;
        [a = 5, b = 7] = [0];
        console.log(a); // 1
        console.log(b); // 7
        console.log(`this is my js promise finished`)
    })

    res.setHeader('Content-Type', 'image/jpg')

    fs.readFile(path.resolve(__dirname, 'mosul_bridge.jpg'), (err, data) => {
        res.end(data)
    })

})

server.listen(port, err => {
    if (err) {
        console.log(err)
    }
})