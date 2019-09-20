const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`)
            return
        }

        let contenido = '';

        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, contenido, err => {
            if (err)
                reject(err)
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`)
        })


    })

}

const listarTabla = (base, limite = 10) => {

    console.log('********************'.green)
    console.log(`*** Tabla del ${base} ***`.green)
    console.log('********************'.green)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i }`)
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}