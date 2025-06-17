const express = require('express')

const bodyParser = require('body-parser')

const {PORT} = require('./config/server.config')
const apiRouter = require('./routes')
const errorHandler = require('./utils/errorHandler')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())


app.use('/api',apiRouter)

app.get('/ping',(req,res)=>{
   return res.json({
        msg : "Problem service is live"
    })
})


app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
    
})