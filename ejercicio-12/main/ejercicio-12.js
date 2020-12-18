'use strict';
var valorHora,
    horasTrabajadas,
    sueldoMensual;

valorHora = parseFloat(prompt('ingrese cuanto gana por hora'))
horasTrabajadas = parseFloat(prompt('ingrese  cuantas horas trabajo'))

sueldoMensual = valorHora * horasTrabajadas ;

document.write(`<p>el sueldo mensual es de: <strong>$${sueldoMensual} </strong></p>` )