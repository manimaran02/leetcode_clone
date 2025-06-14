const express = require('express')

const bodyParser = require('body-parser')

const {PORT} = require('./config/server.config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.text())


app.get('/ping',(req,res)=>{
   return res.json({
        msg : "Problem service is live"
    })
})


app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})