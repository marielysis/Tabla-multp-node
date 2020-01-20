
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=================================='.blue);
    console.log(`TABLA DEL ${ base }`.blue);
    console.log('=================================='.blue);

    for (let i = 1; i <= limite; i++) {
   
        let tabla = (base * i);
    
        console.log(`${ base } * ${ i } = ${ tabla }\n`);

        }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) =>{

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un  numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
   
        let tabla = (base * i);
    
        data += `${ base } * ${ i } = ${ tabla }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }`, data, (err) => {
        if (err) reject(err);
        resolve(`El archivo tabla-${ base }-al-${ limite } ha sido creado!`);
        });


    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
