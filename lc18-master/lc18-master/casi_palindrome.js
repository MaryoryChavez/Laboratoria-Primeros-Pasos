function casiPalindrome(palabra) {

    var tam=palabra.length;
    var pal;
    var cont=0;
    
    for(var i=0, j=tam-1; i<tam/2, j>tam/2; i++, j--){
        if(palabra[i]!=palabra[j]){
            cont++;
        }
    }
    if(cont<=2){
        pal=true;
    }else{
        pal=false;
    }
    return pal;
}

