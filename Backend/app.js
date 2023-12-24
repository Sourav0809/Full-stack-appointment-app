
const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const db = require('./util/database')
const appointmentRoutes = require('./routes/appointmentRoutes')

//APP 

const app = express()

//APPLYING MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
app.use('/user', appointmentRoutes)

// SYNC OUR MODEL 

db.sync().then(() => {
    console.log("table created")
})

// LISTEN
app.listen(4000, () => {
    console.log('App Running ')
})