function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	
laHora=parseInt(laHora); //convierto a entero

if(laHora>=7 && laHora<=11)
{
	alert("Es de mañana.");
}



}//FIN DE LA FUNCIÓN