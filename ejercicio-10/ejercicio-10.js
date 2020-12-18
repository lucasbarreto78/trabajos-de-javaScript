var diametro,
    radio,
    area,
    perimetro,
    pi = 3.1416;

diametro = parseFloat(prompt('ingrese el diametro de un circulo'));

radio = diametro / 2;
perimetro = diametro * pi;
area = pi * radio ** 2;

alert('el perímetro de un ciculo es: '+ perimetro)
alert('El área de un circulo es:' + area)

