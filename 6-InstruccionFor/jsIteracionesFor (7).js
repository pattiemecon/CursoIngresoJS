function Mostrar()
{
	var limite;
	var contadorDivisores=0;
	limite=prompt("Ingrese limite");
	limite=parseInt(limite);
	while(limite<1)
	{
		limite=prompt("REIngrese limite");
		limite=parseInt(limite);
	}

	for(var indice=2;indice<limite;indice++)
	{
		if(limite%indice==0)
		{
			contadorDivisores++;
			document.write("<br>"+indice);
		}
	}
	document.write("<br>Cantidad de Divisores encontrados: "+contadorDivisores);


}//FIN DE LA FUNCIÓN