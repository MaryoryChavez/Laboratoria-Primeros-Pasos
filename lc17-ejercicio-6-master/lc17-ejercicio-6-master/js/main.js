function calcular() {
    var numA = document.getElementById("numA");
    var numB = document.getElementById("numB");
    var salida = document.getElementById("salida");

    var varnumA = numA.value;
    var varnumB = numB.value;

    if (varnumA == 10 || varnumB == 10) {
        salida.innerHTML = "1";
    } else {
        var suma = parseInt(varnumA) + parseInt(varnumB);
        if (suma == 10) {
            salida.innerHTML = "1";
        } else {
            salida.innerHTML = "0";
        }
    }
}