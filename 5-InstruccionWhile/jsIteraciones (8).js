function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero","0");
		//console.log("-> "+numeroIngresado);
		if(numeroIngresado<0)
		{
			negativo=negativo*numeroIngresado;
		}
		else
		{
			numeroIngresado=parseInt(numeroIngresado);
			positivo=positivo+numeroIngresado;
		}
		respuesta=prompt("¿Desea continuar la carga? (si/no)","si");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN