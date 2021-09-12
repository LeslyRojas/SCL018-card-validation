import validator from "./validator.js";

const boton = document.getElementById("enviarNumero");

boton.addEventListener("click", () => {
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;
  validator.isValid(numeroTarjeta);

  if (validator.isValid(numeroTarjeta) === true) {
    alert("tarjeta válida");
    //declara variable que llama el valor devuelto por la función maskify
    let tarjetaOculta = validator.maskify(numeroTarjeta);
    //poner el valor de la tarjeta oculta en el input
    document.getElementById("numeroTarjeta").value = tarjetaOculta;
  } else {
    alert("tarjeta inválida");
  }
});
