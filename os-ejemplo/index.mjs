import os from 'os';

//obtener la arquitectura del sistema
console.log('Arquitectura:', os.arch());

//obtener tipo de sistema operativo
console.log('Plataforma:', os.platform());

//obtener la cantidad total de memoria 
console.log('Memoria total:', os.totalmem());

//obtener memoria libre
console.log('Memoria libre:', os.freemem());

//obtener la informacion de la CPU
console.log('Informacion de la CPU:', os.cpus());