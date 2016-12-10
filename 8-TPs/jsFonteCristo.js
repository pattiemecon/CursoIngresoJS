/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
//function ComenzarIngreso () 

function NumerosPares()
{
	var numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado<1)
	{
		alert("El numero ingresado debe ser positivo");
	}
	else
	{
		var topePares=numeroIngresado;
		var resultadoPares="";

		if(topePares%2!=0)
		{
			topePares--;
		}

	 	for(var contadorPares=topePares;contadorPares>0;contadorPares=contadorPares-2)
	 	{
	 		resultadoPares=resultadoPares+contadorPares+";";
	 	}

	 	alert(resultadoPares);
	}
}//FIN NumerosPares

function NumerosImpares()
{
	var numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado<1)
	{
		alert("El numero ingresado debe ser positivo");
	}
	else
	{
		var topeImpares=numeroIngresado;
		var resultadoImpares="";

		if(topeImpares%2==0)
		{
			topeImpares--;
		}

	 	for(var contadorImpares=topeImpares;contadorImpares>0;contadorImpares=contadorImpares-2)
	 	{
	 		resultadoImpares=resultadoImpares+contadorImpares+";";
	 	}

	 	alert(resultadoImpares);
 	}
}//FIN NumerosImpares

function NumerosDivisibles()
{
	var numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado<1 || numeroIngresado>100)
	{
		alert("El numero ingresado debe ser positivo y menor a cien");
	}
	else
	{
		var resultadoDivisibles="";

		for(var contadorDivisibles=numeroIngresado;contadorDivisibles<101;contadorDivisibles++)
		{
			if(contadorDivisibles%numeroIngresado==0)
			{
				resultadoDivisibles=resultadoDivisibles+contadorDivisibles+";";
			}
		}

		alert(resultadoDivisibles);
	}
}//FIN NumerosDivisibles

function VerificarPrimo()
{
	var numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado<1)
	{
		alert("El numero ingresado debe ser positivo");
	}
	else
 	{
		var esPrimo=true;

 		for(var contadorDivisibles=numeroIngresado-1;contadorDivisibles>1;contadorDivisibles--)
 		{
 			if(numeroIngresado%contadorDivisibles==0)
 			{
 				esPrimo=false;
 			}
 		}

	 	if(esPrimo)
	 	{
	 		alert("El numero ingresado es PRIMO");
	 	}
	 	else
	 	{
	 		alert("El numero ingresado NO es PRIMO");
	 	}
 	}
}//FIN VerificarPrimo

function NumerosPrimos()
{
	var numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);

	if(numeroIngresado<1)
	{
		alert("El numero ingresado debe ser positivo");
	}
	else
 	{
 		var resultadoPrimos="";

		for(var contadorPrimos=numeroIngresado;contadorPrimos>0;contadorPrimos--)
 		{
	 		var esPrimo=true;

			for(var contadorDivisibles=contadorPrimos-1;contadorDivisibles>1;contadorDivisibles--)
 			{
	 			if(contadorPrimos%contadorDivisibles==0)
	 			{
	 				esPrimo=false;
	 			}
 			}

 			if(esPrimo)
 			{
 				resultadoPrimos=resultadoPrimos+contadorPrimos+";";
 			}
 		}

 		alert(resultadoPrimos);
 	}
}//FIN NumerosPrimos
