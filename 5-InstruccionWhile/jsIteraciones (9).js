function Mostrar()
{

	var contador=0;

	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese un numero","0");
		numeroIngresado=parseInt(numeroIngresado);
		//console.log("-> "+numeroIngresado);

		if(contador==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado>numeroMaximo)
				{
					numeroMaximo=numeroIngresado;
				} //(numeroIngresado>numeroMaximo)
			} //(numeroIngresado<numeroMinimo)
		} //(contador==0)
		contador++;
		respuesta=prompt("¿Desea continuar la carga? (si/no)","si");
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;




}//FIN DE LA FUNCIÓN