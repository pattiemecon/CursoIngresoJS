/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var cantidadAlambre;

	largoTerreno=document.getElementById('Largo').value;
	anchoTerreno=document.getElementById('Ancho').value;

	cantidadAlambre=parseInt(largoTerreno)+parseInt(anchoTerreno);
	// calculo el perimetro del rectangulo
	cantidadAlambre=cantidadAlambre*2;
	// calculo la cantidad de alambre (3 vueltas)
	cantidadAlambre=cantidadAlambre*3;

	alert("La cantidad de alambre a comprar es "+cantidadAlambre+" m.");

}
function Circulo () 
{
	var radioTerreno;
	var cantidadAlambre;

	radioTerreno=document.getElementById('Radio').value;

	// calculo el perimetro del circulo
	cantidadAlambre=Math.PI*radioTerreno*2;
	// calculo la cantidad de alambre
	cantidadAlambre=cantidadAlambre*3;

	// debugging
	/*console.log("PI: "+Math.PI);
	console.log("PI*radioTerreno: "+(Math.PI*radioTerreno));
	console.log("radioTerreno*2: "+(2*radioTerreno));*/

	alert("La cantidad de alambre a comprar es "+cantidadAlambre+" m.");
}
function Materiales () 
{
	
}