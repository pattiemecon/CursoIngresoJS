function Mostrar()
{

	/*
	var limite;
	var contadorPares=0;
	limite=prompt("Ingrese limite");
	limite=parseInt(limite);
	while(limite<1)
	{
		limite=prompt("REIngrese limite");
		limite=parseInt(limite);
	}

	for(var indice=2;indice<=limite;indice=indice+2)
	{
		contadorPares++;
		document.write("<br>"+indice);
	}
	document.write("<br>Cantidad de Pares encontrados: "+contadorPares);
	*/

	var limite;
	var contadorPares=0;
	limite=prompt("Ingrese limite");
	limite=parseInt(limite);
	while(limite<1)
	{
		limite=prompt("REIngrese limite");
		limite=parseInt(limite);
	}

	for(var indice=1;indice<=limite;indice++)
	{
		if(indice%2==0)
		{
			contadorPares++;
			document.write("<br>"+indice);
		}
	}
	document.write("<br>Cantidad de Pares encontrados: "+contadorPares);

}//FIN DE LA FUNCIÓN