function factorial(n) {

    var resultado =1;
    if (n>0){
        do{
        resultado*=n;
        n--;
    } while(n>0);
    return resultado;
    }else{
        return null;
    }
    