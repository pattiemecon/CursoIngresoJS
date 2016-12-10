var continuaCarga="si";
var numeroIngresado;
var numeroMayor;
var numeroMenor;
var contadorNumeros=0;
var sumaNumeros=0;
var promedioNumeros;
var contadorPares=0;

while(continuaCarga=="si")
{
	numeroIngresado=prompt("Ingrese un numero positivo");
	while(numeroIngresado<=0)
	{
		numeroIngresado=prompt("REingrese un numero positivo");
	}
	numeroIngresado=parseInt(numeroIngresado);

	if(contadorNumeros==0)
	{
		numeroMenor=numeroIngresado;
		numeroMayor=numeroIngresado;
	}
	else
	{
		if(numeroIngresado>numeroMayor)
		{
			numeroMayor=numeroIngresado;
		}
		else
		{
			if(numeroIngresado<numeroMenor)
			{
				numeroMenor=numeroIngresado;
			} //(numeroIngresado<numeroMenor)
		} //(numeroIngresado>numeroMayor)
	} //(contadorNumeros==0)
	contadorNumeros++;
	sumaNumeros=sumaNumeros+numeroIngresado;

	if(numeroIngresado%2==0)
	{
		contadorPares++;
	}

	continuaCarga=prompt("Continua con la carga de numeros? (si/no)","si");
}

promedioNumeros=sumaNumeros/contadorNumeros;

document.write("<br>a) cantidad de numeros pares: "+contadorPares);
document.write("<br>b) promedio de todos los numeros ingresados: "+promedioNumeros);
document.write("<br>c) suma de todos los numeros: "+sumaNumeros);
document.write("<br>d) numero maximo: "+numeroMayor);
document.write("<br>d) numero minimo: "+numeroMenor);