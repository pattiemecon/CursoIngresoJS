function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeroIngresado;

	while(respuesta=="si")
	{
		contador++;
		numeroIngresado=prompt("Ingrese nro. "+contador,"0");
		//console.log(contador+"-> "+numeroIngresado);
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		respuesta=prompt("¿Desea continuar la carga? (si/no)","si");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN