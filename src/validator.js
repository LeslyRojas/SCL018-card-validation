const validator = {
  isValid(numeroTarjeta) {
    if (numeroTarjeta.length < 1) return false;
    let invertidos = numeroTarjeta.toString().split("").reverse();

    let sumaTotal = 0;

    for (let i = 0; i < invertidos.length; i++) {
      if (i % 2 === 1) {
        const multiplicar = invertidos[i] * 2;
        if (multiplicar > 9) {
          const separarNumeros = multiplicar.toString().split("");
          const primerDigito = parseInt(separarNumeros[0]);
          const segundoDigito = parseInt(separarNumeros[1]);
          const sumarSeparados = primerDigito + segundoDigito;

          sumaTotal += sumarSeparados;
        } else {
          sumaTotal += multiplicar;
          console.log(multiplicar);
        }
      } else {
        sumaTotal += parseInt(invertidos[i]);
      }
    }

    if (sumaTotal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(numeroTarjeta) {
    //establece condición minima para aplicar enmascarado
    if (numeroTarjeta.length < 4) return numeroTarjeta;
    //declara variables para mediante slice, devolver una copia de los elementos especificados del array original
    let digitosTarjeta = numeroTarjeta.slice("");
    //el índice negativo especifica un desplazamiento desde el final del array y extrae los ultimos 4 elementos del array
    let ultimosDigitos = digitosTarjeta.slice(-4);
    //declara variable del tipo de mascara
    const simboloMascara = "#";
    //declara variable para guardar el enmascaramiento tomando los numeros previos a los 4 ultimos, se le suma la variable de los ultimos digitos que serán visibles.
    let tarjetaEnmascarada =
      simboloMascara.repeat(digitosTarjeta.length - 4) + ultimosDigitos;

    //finalizar la ejecución de la función, especifica un valor a ser devuelto a quien llama la función
    return tarjetaEnmascarada;
  },
};
export default validator;
