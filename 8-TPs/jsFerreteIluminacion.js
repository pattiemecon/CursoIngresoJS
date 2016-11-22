/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var marca;
 	var cantidad;
 	var precioBruto;
 	var precioFinal;
 	var importeIIBB;

 	marca=document.getElementById('Marca').value;
 	cantidad=document.getElementById('Cantidad').value;
 	precioBruto=cantidad*35;

 	if(cantidad>5)
 	{
 		precioFinal=precioBruto*0.5;
 	}
 	else
 	{
 		if(cantidad==5)
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				precioFinal=precioBruto*0.6;
 			}
 			else
 			{
 				precioFinal=precioBruto*0.7;
 			} //B.marca=="ArgentinaLuz"
 		}
 		else
 		{
 			if(cantidad==4)
 			{
 				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
 				{
 					precioFinal=precioBruto*0.75;
 				}
 				else
 				{
 					precioFinal=precioBruto*0.8;
 				} //C.marca=="ArgentinaLuz" || marca=="FelipeLamparas"
 			}
 			else
 			{
 				if(cantidad==3)
 				{
 					if(marca=="ArgentinaLuz")
 					{
 						precioFinal=precioBruto*0.85;
 					}
 					else
 					{
 						if(marca=="FelipeLamparas")
 						{
 							precioFinal=precioBruto*0.9;
 						}
 						else
 						{
 							precioFinal=precioBruto*0.95;
 						} //D.marca=="FelipeLamparas"
 					} //D.marca=="ArgentinaLuz"
 				}
 				else
 				{
 					precioFinal=precioBruto;
 				} //D.cantidad==3
 			} //C.cantidad==4
 		} //B.cantidad==5
 	} //A.cantidad>5

 	if(precioFinal>120)
 	{
 		importeIIBB=precioFinal*0.1;
 		precioFinal=precioFinal+importeIIBB;
 		alert("Usted pago "+importeIIBB+" de IIBB.");
 	} //E.precioFinal>120

 	document.getElementById('precioDescuento').value=precioFinal;

}
