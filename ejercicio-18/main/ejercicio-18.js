'use strict';

var valor1,
    rangoMaximo,
    rangoMinimo,
    r = '';



rangoMinimo = parseInt(prompt('ingrese el rango minimo'))
rangoMaximo = parseInt(prompt('ingrese el rango maximo '))
valor1 = parseInt(prompt('ingrese un numero'));
/*
r += `el valor ${valor1}`

if(valor1 >= 10 && valor1 <= 35 ) {
    r += ' esta en el rango '
}else if(valor1 % 2 == 0) {
    r += ' es par'

}else {
    r += ' no esta en el rango'
}

document.write(`<p>${r}</p>`);

*/

if (valor1 >= rangoMinimo && valor1 <= rangoMaximo) {
    r += 'esta en el rango'
    if (valor1 % 2 == 0)
        r += ' y es par'
} else{
    r += ' no esta en el rango'
    if(valor1 % 3 == 0){
        r += ' y es impar'
    }
}

document.write(`<p>${r}</p>`);




/* Se le solicita al usuario que ingrese los extremos de un rango numérico y un número. Realice el
algoritmo para informar si el número está dentro del rango.
    Si está en rango, informar si el número es par.
    Si no está dentro del rango, informar si es número es impar.
    Tenga en cuenta que el rango debe tener una diferencia mínima de 5 números enteros.*/