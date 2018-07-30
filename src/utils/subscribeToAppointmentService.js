import openSocket from 'socket.io-client'

const socket = openSocket('https://team.skedify.io/', {path: '/counter/socket.io', origins: '*:*'})

function subscribeToAppointmentService (cb) {
  socket.on('appointmentCount', msg => cb(null, msg))
  socket.emit('subscribeToAppointmentService');
}

export { subscribeToAppointmentService }