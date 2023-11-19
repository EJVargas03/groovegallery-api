import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send({mesg: 'Hello'})
})

app.listen(port)