const boton = document.getElementById("enviarNumero");

boton.addEventListener("click", ()=>{
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;

    console.log(numeroTarjeta)
})

import validator from './validator.js';

//console.log(validator);
