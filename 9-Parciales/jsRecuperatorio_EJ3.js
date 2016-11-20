//3- realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3 de una compra y luego que
//muestre la suma y el promedio de los precios.

function CalcularSumaPrecios
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;

	precioUno=document.getElementById('Uno').value; //Leo el valor ingresado por el usuario para precio1 por ID
	precioDos=document.getElementById('Dos').value; //Leo el valor ingresado por el usuario para precio2 por ID
	precioTres=document.getElementById('Tres').value; //Leo el valor ingresado por el usuario para precio3 por ID

	sumaPrecios=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres); //Calculo la suma de los tres precios leidos.

	alert("La suma de los precios ingresados es igual a "+sumaPrecios); //Muestro el resultado de la suma
}

function CalcularPromedioPrecios
{
	var precioUno;
	var precioDos;
	var precioTres;
	var sumaPrecios;
	var promedioPrecios;

	precioUno=document.getElementById('Uno').value; //Leo el valor ingresado por el usuario para precio1 por ID
	precioDos=document.getElementById('Dos').value; //Leo el valor ingresado por el usuario para precio2 por ID
	precioTres=document.getElementById('Tres').value; //Leo el valor ingresado por el usuario para precio3 por ID

	sumaPrecios=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres); //Calculo la suma de los tres precios leidos.

	promedioPrecios=sumaPrecios/3; //Calculo el promedio de los tres precios leidos.

	alert("El promedio de los precios ingresados es igual a "+promedioPrecios); //Muestro el resultado del promedio
}