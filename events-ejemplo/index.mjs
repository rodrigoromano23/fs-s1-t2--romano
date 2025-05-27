import {EventEmitter} from 'events';

//Crear una instacia de EventEmitter
const emisor = new EventEmitter();

//Definir un evento personalizado 
emisor.on('saludo', (nombre) => {
    console.log(`¡Hola, ${nombre}!`);
});

//emitir el evento 'saludo'
emisor.emit('saludo', 'Mundo');