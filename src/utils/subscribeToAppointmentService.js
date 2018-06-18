import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

function subscribeToAppointmentService (cb) {
  socket.on('appointmentCount', msg => cb(null, msg))
  socket.emit('subscribeToAppointmentService', 1000)
}

export { subscribeToAppointmentService }