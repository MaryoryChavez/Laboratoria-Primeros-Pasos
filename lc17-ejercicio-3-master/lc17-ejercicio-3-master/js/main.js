
function calcular() {
    var monoA = document.getElementById("monoA").value;
var monoB = document.getElementById("monoB").value;

    var valmonoA = false;
    var valmonoB = false;
    var salida = document.getElementById("salida");

    if (monoA == "1") {
        valmonoA = true;
    }

    if (monoB == "1") {
        valmonoB = true;
    }

    if (valmonoA) {
        if (valmonoB) {
            salida.innerHTML = "1. Oh, oh, los dos monos sonrien, ten cuidado ¡planean alguna travesura!";
            document.getElementById("mono1").innerHTML = '<img src="images/monofeliz.png" alt="">';
            document.getElementById("mono2").innerHTML = '<img src="images/monofeliz.png" alt="">';
            
        } else {
            salida.innerHTML = "0. Uno de ellos está enojado ¿se habrá peleado con su amigo?";
            document.getElementById("mono1").innerHTML = '<img src="images/monofeliz.png" alt="">';
            document.getElementById("mono2").innerHTML='<img src="images/monoenojado.png" alt="">';
        }
    } else {

        if (valmonoB) {
            salida.innerHTML = "0. Uno de ellos está enojado ¿se habrá peleado con su amigo?";
            document.getElementById("mono1").innerHTML='<img src="images/monoenojado.png" alt="">';
            document.getElementById("mono2").innerHTML = '<img src="images/monofeliz.png" alt="">';
        } else {
            salida.innerHTML = "1. Los dos monos estan enojados, mejor te acercas otro día.";
            document.getElementById("mono1").innerHTML='<img src="images/monoenojado.png" alt="">';
            document.getElementById("mono2").innerHTML='<img src="images/monoenojado.png" alt="">';
        }

    }

}
