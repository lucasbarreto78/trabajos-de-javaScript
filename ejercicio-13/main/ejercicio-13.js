'use strict';
var valorHora,
    horasTrabajadas,
    antiguedad,
    sueldoMensual,
    bono;

valorHora = parseFloat(prompt('ingrese cuanto gana por hora'))
horasTrabajadas = parseFloat(prompt('ingrese  horas trabajadas en el mes'))
antiguedad = parseFloat(prompt('ingrese años trabajados'))

sueldoMensual = valorHora * horasTrabajadas ;

bono = .15 * sueldoMensual * antiguedad ;

sueldoMensual += bono;

document.write(`<p>el sueldo mensual mas el bono es: <strong>${sueldoMensual}</strong>  </p>`)