import validator from './validator.js';

const boton = document.getElementById("enviarNumero");

boton.addEventListener("click", ()=>{
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    validator.isValid(numeroTarjeta);
    
if (validator.isValid(numeroTarjeta) === true) {
        alert ("tarjeta válida");
    } else {
        alert ("tarjeta inválida");
}
    
})





