const express = require('express')
const router = express.Router()

router.get('/health',systemController)

module.exports=router