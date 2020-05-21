// Comando para establecer la conexión
var socket = io();

//JQUERY - Referencia al label en nuevo-ticket.html
var label = $('#lblNuevoTicket');

// On, son para escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// On, son para escuchar información
socket.on('disconnect', function() {
    console.log('Se perdio conexión con el servidor');
});

//on 'estadoActual'
socket.on('estadoActual', function(resp) {
    console.log(resp.actual);
    label.text(resp.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});