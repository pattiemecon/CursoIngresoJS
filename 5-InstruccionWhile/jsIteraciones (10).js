function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 

	var sumaNegativos=0;       // caso 1
	var sumaPositivos=0;       // caso 2
	var cantidadPositivos=0;   // caso 3
	var cantidadNegativos=0;   // caso 4
	var cantidadCeros=0;       // caso 5
	var cantidadPares=0;       // caso 6
	var promedioPositivos=0;   // caso 7
	var promedioNegativos=0;   // caso 8
	var diferenciaPosNeg=0;    // caso 9
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado=prompt("Ingrese un numero","0");
		numeroIngresado=parseInt(numeroIngresado);
		console.log("-> "+numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos++;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				cantidadCeros++;
			} //(numeroIngresado>0)
		} //(numeroIngresado<0)

		if(numeroIngresado%2==0 && numeroIngresado!=0)
		{
			cantidadPares++;
		}
		respuesta=prompt("¿Desea continuar la carga? (si/no)","si");
	}

	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativos/cantidadNegativos;
	diferenciaPosNeg=sumaPositivos-sumaNegativos;

	document.write("<h1>RESULTADOS EJERCICIO 10</h1>");
	document.write("<br>1-Suma de los negativos. "+sumaNegativos);
	document.write("<br>2-Suma de los positivos. "+sumaPositivos);
	document.write("<br>3-Cantidad de positivos. "+cantidadPositivos);
	document.write("<br>4-Cantidad de negativos. "+cantidadNegativos);
	document.write("<br>5-Cantidad de ceros. "+cantidadCeros);
	document.write("<br>6-Cantidad de números pares. "+cantidadPares);
	document.write("<br>7-Promedio de positivos. "+promedioPositivos);
	document.write("<br>8-Promedios de negativos. "+promedioNegativos);
	document.write("<br>9-Diferencia entre positivos y negativos, (positvos-negativos). "+diferenciaPosNeg);

}//FIN DE LA FUNCIÓN