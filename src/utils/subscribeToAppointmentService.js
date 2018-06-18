import openSocket from 'socket.io-client'

const socket = openSocket('https://team.skedify.io/counter/', {path: '/counter/socket.io', origins: '*:*'})
socket.on('connect', function(){
  socket.emit('authenticate', {token: 'TEST-TOKEN'});
});
function subscribeToAppointmentService (cb) {
  socket.on('appointmentCount', msg => cb(null, msg))
  socket.emit('subscribeToAppointmentService', 1000)
}

export { subscribeToAppointmentService }