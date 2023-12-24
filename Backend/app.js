
const express = require('express')
const bodyParser = require("body-parser")

// IMPORTING MIDDLWARES
const cors = require('cors')
const appointmentRoutes = require('./routes/appointmentRoutes')

// IMPORTING DATABASE
const db = require('./util/database')


//APP 
const app = express()

//APPLYING MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())
app.use('/user', appointmentRoutes)

// SYNC OUR MODEL 
db.sync().then(() => {
    console.log("table sync")
})

// LISTENING
app.listen(4000, () => {
    console.log('App Running ')
})