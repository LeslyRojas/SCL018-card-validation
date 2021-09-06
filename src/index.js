import validator from './validator.js';

const boton = document.getElementById("enviarNumero");

boton.addEventListener("click", ()=>{
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    console.log (numeroTarjeta)
validator.isValid(numeroTarjeta);

})


//console.log(validator);
