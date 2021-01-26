const fs = require("fs");
var colors = require("colors");

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`.red);
            return;
        }

        let data = "";

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`El Archivo tabla-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite) => {
    let data = "";
    for (let index = 0; index <= limite; index++) {
        data += `${base} * ${index} = ${base * index}\n`;
        console.log(`${base} * ${index} = ${base * index}\n`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla,
};