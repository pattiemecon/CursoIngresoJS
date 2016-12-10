/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var tiempoTranscurrido=0;
tiempoInicio=setInterval(ContarTiempo,1000);

function comenzar()
{

	//Genero el número RANDOM entre 1 y 6
 	ColorSecreto=Math.floor(Math.random()*6)+1;
	//alert(ColorSecreto);
	switch(ColorSecreto)
	{
		case 1:
			ColorSecreto="azul";
			break;
		case 2:
			ColorSecreto="amarillo";
			break;
		case 3:
			ColorSecreto="marron";
			break;
		case 4:
			ColorSecreto="verde";
			break;
		case 5:
			ColorSecreto="celeste";
			break;
		case 6:
			ColorSecreto="rojo";
	}

	document.getElementById('ColorElejido').value=ColorSecreto;


}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	
	if(colorParametro==ColorSecreto)
	{
		clearTimeout(tiempoInicio);
		alert("Tardo "+tiempoTranscurrido+" segundos");
	}


}//FIN DE LA FUNCIÓN

function ContarTiempo()
{

	tiempoTranscurrido++;

}//FIN DE LA FUNCIÓN
