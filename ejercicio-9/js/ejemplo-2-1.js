'use strict';

// Realicemos la codificación a partir de aquí:
//var lado1, lado2, lado3, perimetro;
/*
var lado1, lado2, lado3, // Variables de ingreso
	perimetro; // Variables de egreso
*/
var lado1,
	lado2,
	lado3,
	perimetro;

lado1 = prompt('Ingrese el valor para el lado 1 del triángulo');
lado2 = prompt('Ingrese el valor para el lado 2 del triángulo');
lado3 = prompt('Ingrese el valor para el lado 3 del triángulo');

perimetro = lado1 + lado2 + lado3;

alert('El parímetro del triángulo es: ' + perimetro);