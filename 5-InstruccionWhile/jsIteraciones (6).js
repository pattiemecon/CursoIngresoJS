function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("Ingrese nro. "+contador,"0");
		//console.log(contador+"-> "+numeroIngresado);
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN