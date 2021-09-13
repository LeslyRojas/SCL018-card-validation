import validator from "./validator.js";
//para llamar a boton, crear variable boton y aplicar selector de DOM al boton
const boton = document.getElementById("enviarNumero");
//aplicar selector DOM para hacer click y rescatar el valor del input en la variable numeroTarjeta
boton.addEventListener("click", () => {
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;

  //validator.isValid(numeroTarjeta);

  //condicional si resultado de validación es true, envia alerta de tarjeta válida.
  if (validator.isValid(numeroTarjeta) === true) {
    alert("tarjeta válida");
    //Solo si es válida, se declara variable que llama el valor devuelto por la función maskify
    let tarjetaOculta = validator.maskify(numeroTarjeta);
    //poner el valor de la tarjeta oculta en el input
    document.getElementById("numeroTarjeta").value = tarjetaOculta;
    //si el resultado de la validación no es true, emitir alerta de tarjeta inválida.
  } else {
    alert("tarjeta inválida");
  }
});
