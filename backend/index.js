const express = require('express');
const cors= require('cors');
const dotenv = require('dotenv')
const app = express()
const PORT = process.env.MONGO_URL|3000
dotenv.config()

app.use(cors(),{origin:process.env.MAIN_URL,credentials:true})


app.use(express.json())
mongoose.connect(PORT)

app.use('/auth',authRoutes)

app.listen(process.env.PORT)