//2-realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final
//descontando un (25%) por fin de temporada

function CalcularPrecioConDescuento
{
	var precioSinDescuento;
	var montoDescuento;
	var descuento;
	var precioConDescuento;

	precioSinDescuento=prompt("Ingrese el precio de un producto","0"); //Leo el precio por prompt ingresado por el usuario.

	descuento=0.25; //Descuento en valor decimal.

	montoDescuento=precioSinDescuento*descuento; //Calculo el monto de descuento a restar al precio ingresado.
	precioConDescuento=precioSinDescuento-montoDescuento; //Le resto el monto de descuento al precio ingresado.

	alert("El importe final con descuento es igual a "+precioConDescuento); //Muestro el importe final.
}