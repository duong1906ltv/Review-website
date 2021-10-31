const express = require('express')
const router = express.Router()
const {validateToken} = require('../server/middlewares/AuthMiddleware')

router.post("/",validateToken,(req,res)=>{
    Likes.crea
})

module.exports = router