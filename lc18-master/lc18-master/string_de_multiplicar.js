function stringMultiplicar(n) {

    var cadena="";
    var mult;
    for(var i=1; i<=10; i++){
        mult=n*i;
        cadena += n+"x"+i+"="+mult;
        if((i+1)<=10){
            cadena+="/";
        }
    }

    return cadena;
}
