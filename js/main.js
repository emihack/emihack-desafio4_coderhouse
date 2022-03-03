let destino = prompt ("Elige un destino a donde puedas ir en auto").toUpperCase();

let presupuesto = parseInt( prompt ("¿Cuanto dispones para destinarle a los gastos del vehículo?"));

let combustible = parseInt(prompt("Cuanto dispones para destinarle al combustible?")) ;

let comida = parseInt(prompt ("Cuanto dispones para destinarle a los gastos de la comida?")) ;

let seguro = parseInt(prompt ("Cuanto dispones para destinarle para los gastos en seguro?")) ;

let gastos = parseInt(seguro) + parseInt (combustible) + parseInt (comida);

suma(seguro, combustible, comida);

resta(presupuesto, gastos);

function suma (seguro, combustible, comida){

    let gastos = parseInt(seguro) + parseInt (combustible) + parseInt (comida);

}

function resta (presupuesto, gastos){
    
    let balance = parseInt(presupuesto) - parseInt (gastos) ;


    if(balance > 0){
        document.write("Tenes el dinero suficiente para realizar el viaje" + "<br>");
        alert("Buenisimo te alcanza para irte en tu vehículo pasala fantástico!");
    }
    else if(balance < 0 ){
        alert("De mochila es mas barato");
    }
    else {
        alert("Si vas en colectivo es mas barato");
    }    

}