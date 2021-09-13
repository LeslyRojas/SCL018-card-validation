//objeto validator-contenedor de las funciones
const validator = {
  //metodo isValid
  isValid(numeroTarjeta) {
    //condicion para retornar false si es que no se ingresa algun numero
    if (numeroTarjeta.length < 1) return false;
    //variable para guardar el numero invertido
    let invertidos = numeroTarjeta.toString().split("").reverse();

    //se inicia variable de sumaTotal en cero
    let sumaTotal = 0;

    //se usa ciclo para recorrer array ya invertido con i=0 y de uno en uno, a lo largo del array
    for (let i = 0; i < invertidos.length; i++) {
      //si el residuo de i y 2 es igual a 1, multiplicar por dos el invertido ...continua
      //en linea  37
      if (i % 2 === 1) {
        const multiplicar = invertidos[i] * 2;
        //si el resultado de la multiplicacion es mayor a 9, separar los dos digitos y sumarlos
        //continuando en linea 32
        if (multiplicar > 9) {
          const separarNumeros = multiplicar.toString().split("");
          //aplicar parseInt para pasar a numero e indicar posicion
          const primerDigito = parseInt(separarNumeros[0]);
          const segundoDigito = parseInt(separarNumeros[1]);
          //sumar  digitos separados
          const sumarSeparados = primerDigito + segundoDigito;

          //agregar los separados y sumados  a la suma total
          sumaTotal += sumarSeparados;
        //agregar los multiplicados a la suma total
        } else {
          sumaTotal += multiplicar;
          console.log(multiplicar);
        }
      //si no agregarlo a la suma total
      } else {
        sumaTotal += parseInt(invertidos[i]);
      }
    }

    //si el residuo entre sumaTotal y 10 es cero, retorna true
    if (sumaTotal % 10 === 0) {
      return true;
      //si no, devuelve false
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
