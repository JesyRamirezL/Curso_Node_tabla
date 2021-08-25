//ejercicio para importar archivos del mismo proyecto
const fs = require('fs');//importacion de require de file system
const colors = require('colors');

const crearArchivo = async(base = 5, lista = false, hasta = 10) =>{

    try{
        let salida, consola = '';

        //ejercicio simple para las tablas
        for(let i = 1; i <= hasta; i++){
            //console.log(`${base} X ${i} = ${base * i}`);  
            salida += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(lista){
            console.log('---------------------'.green);
            console.log(`Tabla del ${base}`.blue);
            console.log('---------------------'.green);

            console.log(consola);
        }
        

        //crear un archivo a partir de una salida de una funcion
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //se tiende a usar el filesyn ya que es más limpio, la diferencia es que para atrapar un error, se tendría que meter dentro de un try catch
        return ('Archivo creado');
    }catch(error){
        throw error;

    }
    
}
//método para exportacion de propiedades del mismo archivo
module.exports = {
    //aqui se colocaran las funciones a exportar
    crearArchivo 
}