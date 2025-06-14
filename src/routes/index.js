const express = require('express')
const v1Router = require('./v1')

const apiRouter = express.Router()

apiRouter.use('/v1',v1Router)

// apiRouter.get('/mani',(req,res)=>{
//     res.json({
//         msg : "Mani"
//     })
// })


module.exports = apiRouter
