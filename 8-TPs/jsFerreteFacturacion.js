/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

// declaracion de variables
var precioUno;
var precioDos;
var precioTres;
var resultado;

// console.log() -> Muestra mensajes en la consola

function Sumar () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	//prueba console.log
	console.log("HOLA");
	console.log(precioUno);

	resultado=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);

	alert("La suma de los precios es "+resultado);

}
function Promedio () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	resultado=(parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres))/3;

	alert("El promedio de los precios es "+resultado);
	
}
function PrecioFinal () 
{
	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	resultado=(parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres))*1.21;

	alert("La suma de los precios más IVA es "+resultado);
	
}