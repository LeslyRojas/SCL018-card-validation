
const validator = {
    isValid (numeroTarjeta) {

    let invertidos = numeroTarjeta.toString().split("").reverse();
    console.log(invertidos);
     
    let sumaTotal = 0;
    
    for (let i = 0; i < invertidos.length; i++) {
      
        if (i % 2 === 1){
            const multiplicar = invertidos[i] * 2;  
            if (multiplicar > 9) {
                const separarNumeros = multiplicar.toString().split("");
                const primerDigito = parseInt(separarNumeros[0]);
                const segundoDigito = parseInt(separarNumeros[1]);
                const sumarSeparados = primerDigito + segundoDigito;
                console.log(sumarSeparados);
                sumaTotal += sumarSeparados;
            } else{
                sumaTotal += multiplicar; console.log(multiplicar);
            }
        }    else{
                sumaTotal += parseInt(invertidos[i]);
        }
    }
            console.log(sumaTotal);
   

}
}
export default validator;