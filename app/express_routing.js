const express = require('express')
const app = express()
const port = 8080

app.get('/books/:userId/:bookId', (req, res) => res.send(req.params))
app.delete('/', (req, res) => res.send('delete mew'))


app.listen(port, () => console.log(`I'm listening yah`))
