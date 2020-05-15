const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

mongoose.connect("mongodb://localhost:27017/nodeapi")

requireDir('./src/models')



app.use('/api', require("./src/routes") )

app.listen(3001)
