function calcular() {
    var numA = document.getElementById("numA");
    var numB = document.getElementById("numB");
    var salida = document.getElementById("salida");

    var varnumA = numA.value;
    var varnumB = numB.value;

    if (varnumA>0 && varnumB>0) {
        salida.innerHTML = "0";
    } else {
            salida.innerHTML = "1";
        }
}