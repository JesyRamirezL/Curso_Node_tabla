//BASES DE NODE
const {crearArchivo} = require('./helpers/multiplicar');//llama al otro archivo a través de la funcion para crear un archivo.
const argv = require('./config/yargs');
require('colors');

console.clear();//para limpiar consola

//console.log(argv);

/*//obtención de argumentos a través de la consola se ejecutaria --base=num después de la instruccion de node y el nombre del archivo
const [,,arg3 = 'base=5'] = process.argv;//el de base se le pone por default en caso de que no se dé ningun nombre, el argv se usa para obtener los argumentos de la consola
const[, base = 5] = arg3.split('=');
console.log(base);

//const base = 5;//indica la tabla*/

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));