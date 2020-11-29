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
}