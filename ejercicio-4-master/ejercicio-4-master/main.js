var minutos, costoMinuto, costoTotal;

minutos = prompt("Ingresa la cantidad de minutos");
costoMinuto = prompt("Ingresa el costo por Minuto");

costoTotal = parseFloat(minutos) * parseFloat(costoMinuto);

alert("el costo total de la llamada es:" + costoTotal + " soles");
