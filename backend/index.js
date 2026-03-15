const dotenv = require('dotenv')
dotenv.config()
const mongoose = require("mongoose")
const express = require('express');
const cors= require('cors');


const authRoute= require('./route/auth.route')

const app = express()
const PORT = process.env.PORT||3000
app.use(cors())


app.use(express.json())
app.use('/api/v1/',authRoute)
// mongoose.connect(process.env.MONGO_URL)



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
