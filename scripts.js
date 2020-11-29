var jugador1, jugador2

//variable de turno
var turno

//variable de ganador (0 jugador 1, 1 jugador 2)
var existeGanador = false

//contador de turnos
var contadorTurnos = 0

function empezarJuego(){

    jugador1 = document.getElementById("jugador1").value
    jugador2 = document.getElementById("jugador2").value


    if(jugador1 == "" || jugador2 == "")
    {
        alert("Se deben ingresar 2 jugadores para iniciar el juego")

    }
    else{
        
        seleccionJugador()

        document.getElementById("contenedorTabla").hidden = false;
        document.getElementById("contenedorJugadores").hidden = true;

    }
}

function seleccionJugador(){
    //selecciona un número entre 0 y 1 para asgnar el jugador que comienza
    // 0 == jugador1 | 1 == jugador2
    let random = Math.floor(Math.random() *2)

    if(random == 0){
        turno = false;
        alert("Inicia el jugador 1. Símbolo: X")
    }
    else{
        turno = true;
        alert("Inicia el jugador 2. Símbolo: O")
    }

}

function seleccionarCasilla(elemento){
    
    let simbolo

    if(elemento.innerHTML == ""){
        if(turno == true){
            simbolo = "O"
            turno = false
        }
        else{
            simbolo = "X"
            turno = true;
        }
    
        elemento.innerHTML = simbolo

        let idCasilla = elemento.getAttribute("id")
    
        switch (idCasilla) {
            case "t1":
                validaT1(simbolo)
                break;
            case "t2":
                validaT2(simbolo)
                break;
            case "t3":
                validaT3(simbolo)
                break;        
            case "c1":
                validaC1(simbolo)
                break;
            case "c2":
                validaC2(simbolo)
                break;
            case "c3":
                validaC3(simbolo)
                break;
            case "b1":
                validaB1(simbolo)
                break;
            case "b2":
                validaB2(simbolo)
                break;
            case "b3":
                validaB3(simbolo)
                break;                    

        }
    }
    else{
        alert("Esta casilla ya ha sido seleccionada. Seleccione otra")
    }
 
}

function validaT1(simbolo){

    if(document.getElementById("t2").innerHTML == simbolo && document.getElementById("t3" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)

    }
    else if(document.getElementById("c2").innerHTML == simbolo && document.getElementById("b3" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("c1").innerHTML == simbolo && document.getElementById("b1" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }

}

function validaT2(simbolo){

    if(document.getElementById("t1").innerHTML == simbolo && document.getElementById("t3" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)

    }
    else if(document.getElementById("c2").innerHTML == simbolo && document.getElementById("b2" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }

}

function validaT3(simbolo){

    if(document.getElementById("t1").innerHTML == simbolo && document.getElementById("t2" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)

    }
    else if(document.getElementById("c2").innerHTML == simbolo && document.getElementById("b1" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("c3").innerHTML == simbolo && document.getElementById("b3" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
}

function validaC1(simbolo){

    if(document.getElementById("t1").innerHTML == simbolo && document.getElementById("b1" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)

    }
    else if(document.getElementById("c2").innerHTML == simbolo && document.getElementById("c3" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
}

function validaC2(simbolo){

    if(document.getElementById("t1").innerHTML == simbolo && document.getElementById("b3" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)

    }
    else if(document.getElementById("t2").innerHTML == simbolo && document.getElementById("b2" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("c1").innerHTML == simbolo && document.getElementById("c3" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("b1").innerHTML == simbolo && document.getElementById("t3" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }

}

function validaC3(simbolo){

    if(document.getElementById("t3").innerHTML == simbolo && document.getElementById("b3" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)

    }
    else if(document.getElementById("c1").innerHTML == simbolo && document.getElementById("c2" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
}

function validaB1(simbolo){

    if(document.getElementById("t1").innerHTML == simbolo && document.getElementById("c1" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("c2").innerHTML == simbolo && document.getElementById("t3" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("b2").innerHTML == simbolo && document.getElementById("b3" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
}

function validaB2(simbolo){

    if(document.getElementById("b1").innerHTML == simbolo && document.getElementById("b3" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("t2").innerHTML == simbolo && document.getElementById("c2" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
}

function validaB3(simbolo){

    if(document.getElementById("t3").innerHTML == simbolo && document.getElementById("c3" ).innerHTML == simbolo){
        //se obtiene el ganador
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("c2").innerHTML == simbolo && document.getElementById("t1" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
    else if(document.getElementById("b2").innerHTML == simbolo && document.getElementById("b1" ).innerHTML == simbolo){
        obtenerGanador(simbolo)
    }
}

function obtenerGanador(simbolo){

    if(simbolo == "X"){
        document.getElementById("mensaje").innerHTML ="El ganador es el jugador: " + jugador1
    }
    else{
        document.getElementById("mensaje").innerHTML ="El ganador es el jugador: " + jugador2
    }

    //se muestra el mensaje
    document.getElementById("mensaje").hidden = false;
}