function Mostrar()
{

var laHora = document.getElementById('hora').value;

switch(laHora)
{
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
		alert("Es de mañana.");
}

/*	
laHora=parseInt(laHora); //convierto a entero

if(laHora>=7 && laHora<=11)
{
	alert("Es de mañana.");
}
*/


}//FIN DE LA FUNCIÓN