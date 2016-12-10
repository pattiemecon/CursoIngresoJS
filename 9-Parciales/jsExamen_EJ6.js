var diasHabiles=24;
var importeVenta;
var importeMayor;
var importeMenor;

for(var contadorDias=0;contadorDias<diasHabiles;contadorDias++)
{
	importeVenta=prompt("Ingrese importe de venta del dia "+(parseInt(contadorDias)+1));
	while(importeVenta<=0)
	{
		importeVenta=prompt("REingrese importe de venta del dia "+(parseInt(contadorDias)+1));
	}
	importeVenta=parseInt(importeVenta);

	if(contadorDias==0)
	{
		importeMenor=importeVenta;
		importeMayor=importeVenta;
	}
	else
	{
		if(importeVenta>importeMayor)
		{
			importeMayor=importeVenta;
		}
		else
		{
			if(importeVenta<importeMenor)
			{
				importeMenor=importeVenta;
			} //(importeVenta<importeMenor)
		} //(importeVenta>importeMayor)
	} //(contadorDias==0)
}

alert("Importe Mayor: "+importeMayor+" - Importe Menor: "+importeMenor);