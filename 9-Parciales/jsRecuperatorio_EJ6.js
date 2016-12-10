var cantidadContenedores=50;
var pesoContenedor;
var pesoMayor;
var pesoMenor;

for(var contadorDias=0;contadorDias<cantidadContenedores;contadorDias++)
{
	pesoContenedor=prompt("Ingrese peso del Contenedor "+(parseInt(contadorDias)+1));
	while(pesoContenedor<=0)
	{
		pesoContenedor=prompt("REingrese peso del Contenedor "+(parseInt(contadorDias)+1));
	}
	pesoContenedor=parseInt(pesoContenedor);

	if(contadorDias==0)
	{
		pesoMenor=pesoContenedor;
		pesoMayor=pesoContenedor;
	}
	else
	{
		if(pesoContenedor>pesoMayor)
		{
			pesoMayor=pesoContenedor;
		}
		else
		{
			if(pesoContenedor<pesoMenor)
			{
				pesoMenor=pesoContenedor;
			} //(pesoContenedor<pesoMenor)
		} //(pesoContenedor>pesoMayor)
	} //(contadorDias==0)
}

alert("Contenedor mas pesado: "+pesoMayor+" - Contenedor menos pesado: "+pesoMenor);