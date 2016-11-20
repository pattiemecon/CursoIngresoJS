//3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
//   cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.

function CalcularCantidadAlambre
{
	var largoTerreno;
	var anchoTerreno;
	var cantidadHilos;
	var perimetroTerreno;
	var cantidadAlambre;

	largoTerreno=document.getElementById('Largo').value; //leo el valor del ID del Largo del Terreno ingresado por el usuario.
	anchoTerreno=document.getElementById('Ancho').value; //leo el valor del ID del Ancho del Terreno ingresado por el usuario.
	cantidadHilos=3; //cantidad de hilos de alambre a colocar al terreno.

	/* El rectángulo tiene los lados iguales dos a dos, por tanto:
	   P = 2 * a + 2 * b */

	//Calculo el perimetro del Terreno, que es la cantidad de alambre si se alambra con un solo hilo
	perimetroTerreno=parseInt(largoTerreno*2)+parseInt(anchoTerreno*2);

	//Calculo la cantidad total de alambre, de acuerdo a la cantidad de hilos necesarios.
	cantidadAlambre=perimetroTerreno*cantidadHilos;

	alert("La cantidad de alambre necesaria para colocarle 3 hilos de alambrado al perímetro del Terreno es "+cantidadAlambre);
}