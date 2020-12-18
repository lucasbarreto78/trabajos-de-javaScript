'use strict';
var valor,
    respuesta = '' ;

valor = parseFloat(prompt('ingrese un numero'));

respuesta += `el numero ${valor}`

if(valor == 0) {
    respuesta += 'es cero';

}else{

    if (valor % 2 ==0 ) {
        respuesta += 'es par'
    }else{
        respuesta += ' es impar'
    }
}

document.write( `<p> Resultado: ${respuesta} </p>` )










/*
 Se le solicita al usuario que ingrese un número. Realice el algoritmo para informar si el número
es cero, par o impar.
*/


