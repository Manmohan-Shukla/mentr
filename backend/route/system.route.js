const express = require('express')
const router = express.Router()

router.get('/health',systemController.get_health)

module.exports=router