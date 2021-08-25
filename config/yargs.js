//YARGS INDEPENDIENTES
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        //console.log('yargs', argv)
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;//mandar a llamar yargs para usarlo

module.exports = argv;