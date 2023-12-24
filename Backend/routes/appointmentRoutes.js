const express = require('express')
const { addAppointment, getAppointments, deleteAppointment, editAppointment } = require('../controllers/appointmentsController')

const router = express.Router()

router.post('/addAppointment', addAppointment)

router.get('/getAppointment', getAppointments)

router.patch('/editAppointment', editAppointment)

router.delete('/deleteAppointment', deleteAppointment)


module.exports = router