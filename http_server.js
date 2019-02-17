const http = require('http');
const fs = require('fs')
const path = require('path')
const port = 8080;

const server = http.createServer((req, res) => {
    console.log(req.url)

    const promisfy = new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve('hey I came back after 5000')
        }, 5000);
    })

    promisfy.then( data =>{
        console.log(`this is my js promise to learn ${data}`)
    })

    res.setHeader('Content-Type' , 'image/jpg')
    
    fs.readFile(path.resolve(__dirname, 'mosul_bridge.jpg'), (err, data) => {
        res.end(data)
    })

})

server.listen(port, err => {
    if (err) {
        console.log(err)
    }
})