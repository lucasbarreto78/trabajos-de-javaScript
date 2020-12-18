'use strict';
var valorHora,
    horasTrabajadasAlMes,
    antiguedadEmpleado,
    segurosVendidos,
    seguroMasCaro,
    bonoDelSeguroMasVendido,
    bonoSegurosVendidos,
    bonoAntiguedad,
    valorPromedioDeHora,
    sueldoMensual,
    sueldoTotal;


valorHora = parseFloat(prompt(`Ingrese el valor de la hora `));
horasTrabajadasAlMes = parseFloat(prompt('ingresé la cantidad de horas trabajadas en el mes'));
antiguedadEmpleado = parseInt(prompt('ingresé sus años de antigüedad'));
segurosVendidos = parseInt(prompt('ingresé la cantidad de seguros vendidos'));
seguroMasCaro = parseFloat(prompt('ingresé el valor del seguro mas caro'));

sueldoMensual = horasTrabajadasAlMes * valorHora;
bonoDelSeguroMasVendido = .50 * seguroMasCaro;
bonoSegurosVendidos = sueldoMensual * .25 * segurosVendidos;
bonoAntiguedad = sueldoMensual * .15 * antiguedadEmpleado;

sueldoTotal = sueldoMensual + bonoDelSeguroMasVendido + bonoAntiguedad + bonoAntiguedad;

valorPromedioDeHora = sueldoMensual / horasTrabajadasAlMes;

document.write(`<p>El sueldo mensual del empleado es: $${sueldoMensual}</p>
                <p>El valor promedio de horas trabajadas es: ${valorPromedioDeHora}</p>`)


