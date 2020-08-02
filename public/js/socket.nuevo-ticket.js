
//comando establece la conexion

var socket = io();

let label = $('#lblNuevoTicket')

socket.on('connect', function(){
    console.log('Conectado con el servidor');
});


socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor');
});

socket.on('estadoActual',function( resp ){
    label.text(resp.actual);
});

$('button').on('click', function(){

    socket.emit('siguienteTicket', null, function(siguienteTicket){
        label.text(siguienteTicket);
    });
    
    
});