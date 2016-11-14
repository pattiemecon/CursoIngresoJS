/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*
concepto de 
variable
var nombrevariable;

concatenacion
se utiliza el signo +
"cadena1"+"cadena2"

prompt
variable=prompt("texto","valor por defecto");
	*/

	var producto;
	var precio=prompt("Ingrese precio","999");
	producto="samsung";

	producto=prompt("Ingrese marca","sin marca");

	alert("Su producto es: "+producto+" y su precio es: $"+precio);
	
}

