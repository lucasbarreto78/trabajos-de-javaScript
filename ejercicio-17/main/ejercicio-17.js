'use strict';
var letra,
    r = '';
letra = prompt('Ingresé una letra')

switch (letra) {
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'U':
    case 'u':
        r += ' es una volcal';
        break;
        default:
                r += ' no es una vocal';
}
document.write(`<p>La ${letra}  ${r}</p>`)











/*
Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si el valor
ingresado es una vocal (de ser así su orden) o no.
*/