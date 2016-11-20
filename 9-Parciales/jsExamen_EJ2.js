// 2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
//   sumándole el IVA (21%).

function CalcularPrecioMasIVA
{
	var precioSinIVA;
	var montoIVA;
	var IVA;
	var precioConIVA;

	precioSinIVA=prompt("Ingrese el precio de un producto","0"); //Leo el precio por prompt ingresado por el usuario.
	precioSinIVA=parseInt(precioSinIVA); //Convierto a entero el precio sin iva leido por prompt para poderlo sumar.

	IVA=0.21 //IVA en valor decimal.

	montoIVA=precioSinIVA*IVA; //Calculo el monto de IVA a adicionar al precio ingresado.
	precioConIVA=precioSinIVA+montoIVA; //Le adiciono el monto de IVA al precio ingresado.

	alert("El importe final con IVA es igual a "+precioConIVA); //Muestro el importe final.
}