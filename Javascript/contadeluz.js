function conta() {
    var quantidade = document.getElementById('quantidade').value;
    var valor = document.getElementById('quantidade').value;
    var total = valor*quantidade;
    var totalp=0;
    if ( quantidade>100) {
     totalp= (total*0.25) + total;
     document .getElementById('resultado').innerHTML +=(total*0.25) + total;
    }
    else if (quantidade>200){
     totalp= (total*0.5)+ total;
     document .getElementById('resultado').innerHTML +=(total*0.25) + total;
    }

    
}