/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
	var edad;
	var resultado;

	nombre=document.getElementById('elNombre').value;
	edad=document.getElementById('laEdad').value;
	resultado="Usted se llama "+nombre+" y tiene "+edad+" años";

	alert(resultado);
}

