const http = require('http');
const express = require('express')
const app = express()
const port = 8080;


app.get('/', (req,res) => res.send('hey man \n'))

app.listen(port, () =>
console.log(`hey yo I'm listening to port ${port}`)
)