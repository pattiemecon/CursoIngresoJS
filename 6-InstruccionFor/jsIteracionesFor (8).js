function Mostrar()
{

	var numero;
	var contadorDivisores=0;
	numero=prompt("Ingrese numero");
	numero=parseInt(numero);
	while(numero<1)
	{
		numero=prompt("REIngrese numero");
		numero=parseInt(numero);
	}

	for(var indice=2;indice<numero;indice++)
	{
		if(numero%indice==0)
		{
			contadorDivisores++;
		}
	}
	
	if(contadorDivisores==0)
	{
		alert("El numero ingresado es PRIMO");
	}
	else
	{
		alert("El numero ingresado NO es PRIMO");
	}


}//FIN DE LA FUNCIÓN