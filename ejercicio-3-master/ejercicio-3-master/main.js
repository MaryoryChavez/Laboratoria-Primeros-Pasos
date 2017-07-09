var horas, pago, sueldo;

horas = prompt("ingresa las horas que laboras");
pago = prompt("ingresa el pago que recibes por hora");

sueldo = parseFloat(horas) * parseFloat(pago);

alert("tu sueldo semanal es: " + sueldo + " soles");
