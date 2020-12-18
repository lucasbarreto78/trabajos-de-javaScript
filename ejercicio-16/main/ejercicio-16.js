'use strict';
var valor,
    respuesta = '';
valor=parseFloat(prompt('ingrese un numero'));

respuesta = `el numero ${valor}`

if ( valor % 3 === 0 ) {
    respuesta += ' es multiplo de 3';
}else if(valor % 5 == 0) {
    respuesta += ' es multiplo de 5';
}else{
    respuesta += ' no es multiplo de 3'
}


if (valor % 3 !== 0 && valor % 5 !== 0) {
    respuesta += ' no es mutiplo de ninguno';

}
document.write(`<p>${respuesta}</p>`)


/*
Se le solicita al usuario que ingrese un número. Realice el algoritmo para informar si el número
es múltiplo de 3, múltiplo 5, múltiplo de ambos o múltiplo de ninguno.
*/