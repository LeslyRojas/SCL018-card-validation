
const validator = {
    isValid (numeroTarjeta) {

    let invertidos = numeroTarjeta.split("").reverse().join("");
    console.log(invertidos);
     
    let totalSum = 0;

    for (let i = 0; i < invertidos.length; i = i + 2) {
      const number = invertidos[i];
      const position = i + 2;

        if (position % 2 == 0){
        const multiplicar = number * 2;
        if (multiplicar > 9) {
        const separarNumeros = multiplicar.toString().split("");
        const primerDigito = parseInt(separarNumeros[0]);
        const segundoDigito = parseInt(separateNumbers[1]);
        const sumarSeparados = primerDigito + segundoDigito;
        sumaTotal += sumarSeparados;
        } else{
            sumaTotal += multiplicar;
        }}}
        console.log(sumaTotal);

export default validator
}

}