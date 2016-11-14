/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//id="elNombre"
	//document.get tab shif i
	
	/* 
	document.getElementById trae el objeto referenciado
	por el id que esta definido en el html

	document.getElementById.value trae el valor del objeto
	*/

	var nombre;
	nombre=document.getElementById('elNombre').value;
	alert(nombre);
}


