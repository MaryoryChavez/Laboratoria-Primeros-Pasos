function calcular() {
    var num = document.getElementById("num");
    var num21 = document.getElementById("num21");
    var igualar = document.getElementById("igualar");
    var salida = document.getElementById("salida");
    var res;

    var varnum = num.value;
    var varnum21 = num.value;


    if (varnum == "") {
        num.placeholder = "Rellenar el campo!";
        num.style.backgroundColor = "rgba(247, 118, 23, 0.54)";
        salida.innerHTML = "Necesitas un numero";
        igualar.innerHTML = " ? ";
    } else {
        num.style.backgroundColor = "#fff";

        if (varnum < 21) {
            varnum21 = 21;
            res = varnum21 - varnum;
            igualar.innerHTML = " < ";
            salida.innerHTML = "21 - " + varnum + " = " + res;
        } else if (varnum == 21) {
            varnum21 = 21;
            res = varnum21 - varnum;
            igualar.innerHTML = " = ";
            salida.innerHTML = "21 - " + varnum + " = " + res;
        } else {
            varnum21 = 21;
            res = (varnum - 21) * 2;
            igualar.innerHTML = " > ";
            salida.innerHTML = "( " + varnum + " - 21 )" + " x 2 = " + res;
        }
    }
}