const appointments = require("../models/appointments")

const appointmentsController = {
    // for fetch the ppointmens 
    getAppointments(req, res) {
        appointments.findAll()
            .then((val) => {
                res.send(val)
            })
            .catch(err => console.log(err))
    },

    addAppointment(req, res) {
        // for adding the appointment
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone
        appointments.create({
            name: name,
            email: email,
            phone: phone
        })
            .then((val) => {
                res.send({
                    name, email, id: val.id, phone
                })
            })
            .catch(err => console.log(err))
    }
    ,
    editAppointment(req, res) {
        // for editing appointment
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const phone = req.body.phone
        appointments.findAll({ where: { id: id } })
            .then((findedAppointment) => {
                const appointment = findedAppointment[0]
                appointment.name = name
                appointment.email = email,
                    appointment.phone = phone
                return appointment.save()
            })
            .then(() => {
                res.send({ status: true, id: id })
            })
            .catch(err => console.log(err))
    },

    deleteAppointment(req, res) {
        // for deleting the appointments
        const id = req.body.id
        appointments.findAll({ where: { id: id } })
            .then((appointment) => {
                return appointment[0].destroy()
            })
            .then(() => {
                res.send({ status: "Deleled", id: id })
            })
            .catch(err => console.log(err))

    }
}

module.exports = appointmentsController