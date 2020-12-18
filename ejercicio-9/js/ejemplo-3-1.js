'use strict';

// Realicemos la codificación a partir de aquí:
/*
var lado1, lado2, lado3, // Variables de ingreso
	perimetro; // Variables de egreso
*/
/*
var lado1,
	lado2,
	lado3,
	perimetro;
*/
var lado1, lado2, lado3, perimetro;

lado1 = prompt('Ingrese el valor para el lado 1 del triángulo'); // '5'
// '5'
lado1 = parseInt(lado1);
// 5

lado2 = prompt('Ingrese el valor para el lado 2 del triángulo');
lado2 = parseFloat(lado2);

/*
lado3 = prompt('Ingrese el valor para el lado 3 del triángulo'); // "4"
lado3 = parseFloat(lado3);
*/
lado3 = parseFloat(prompt('Ingrese el valor para el lado 3 del triángulo'));
//lado3 = parseInt(prompt('Ingrese el valor para el lado 3 del triángulo'));

perimetro = lado1 + lado2 + lado3;

alert('El parímetro del triángulo es: ' + perimetro);