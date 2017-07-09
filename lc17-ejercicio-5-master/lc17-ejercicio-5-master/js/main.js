function calcular() {
    var hora = document.getElementById("hora");
    var loro = document.getElementsByName("loro");

    var varhora = hora.value;
    var varsalida = document.getElementById("salida");

    if (varhora == "") {
        hora.placeholder = "Rellenar campo!";
        hora.style.backgroundColor = "rgba(247, 118, 23, 0.54)";
        varsalida.innerHTML = "Necesitas poner la hora";
    } else {
        hora.style.backgroundColor = "#fff";
        for (var i = 0; i < loro.length; i++) {
            if (loro[0].checked) {
                if (varhora >= 7 && varhora <= 20) {
                    varsalida.innerHTML = "no estamos en problemas";
                } else {
                    varsalida.innerHTML = "si estamos en problemas";
                }
            } else if (loro[1].checked) {
                varsalida.innerHTML = "No estamos en problemas";
            } else {
                varsalida.innerHTML = "¿El loro está cantando?";
            }
        }
    }
}