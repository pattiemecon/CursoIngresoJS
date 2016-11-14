/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	
	// id="elNombre"
	
	/* 
	document.getElementById trae el objeto referenciado
	por el id que esta definido en el html

	document.getElementById.value trae el valor del objeto
	o asigna un valor al objeto
	*/

	var nombre=prompt("Ingrese dato");
	document.getElementById('elNombre').value=nombre;
}

