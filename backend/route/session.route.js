const express = require('express')
const router = express.Router()

router.get('/session',sessionController.session_all)

router.get('/session/:id',sessionController.session_id)        

module.exports=router