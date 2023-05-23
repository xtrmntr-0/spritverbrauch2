"use strict"

window.addEventListener("load", function(){



    let button = document.getElementById("berechne");
    button.addEventListener("click", function(){
        let kilometer = document.getElementById("kilometer");
        let liter = document.getElementById("liter");
        let literpreis = document.getElementById("literpreis")
       
    
        let dverbrauch = ((liter.value * 100) / kilometer.value);

        let preis = (dverbrauch * literpreis.value)

       document.getElementById("durchschnittsverbrauch").value = dverbrauch.toFixed(2);
       document.getElementById("kosten").value = preis.toFixed(2)
        
        
        
        
    });

});