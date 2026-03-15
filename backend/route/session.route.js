const express = require('express')
const router = express.Router()

router.get('/session',sessionController)

router.get('/session/:id',sessionController)        

module.exports=router