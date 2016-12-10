var cantidadPersonas=100;
var edadPersona;
var sexoPersona;
var edadMenor;
var sumaEdades=0;
var contadorVaronesMayor20=0;
var promedioEdades;

for(var contadorPersonas=0;contadorPersonas<cantidadPersonas;contadorPersonas++)
{
	edadPersona=prompt("Ingrese edad de la Persona "+(parseInt(contadorPersonas)+1));
	while(edadPersona<0 || edadPersona>100)
	{
		edadPersona=prompt("REingrese edad de la Persona "+(parseInt(contadorPersonas)+1));
	}
	edadPersona=parseInt(edadPersona);

	sexoPersona=prompt("Ingrese sexo de la Persona "+(parseInt(contadorPersonas)+1));
	while(sexoPersona!="f" && sexoPersona!="m")
	{
		sexoPersona=prompt("REingrese sexo de la Persona "+(parseInt(contadorPersonas)+1));
	}

	sumaEdades=sumaEdades+edadPersona;

	if(contadorPersonas==0)
	{
		edadMenor=edadPersona;
	}
	else
	{
		if(edadPersona<edadMenor)
		{
			edadMenor=edadPersona;
		} //(edadPersona<edadMenor)
	} //(contadorPersonas==0)

	if(sexoPersona=="m" && edadPersona>=20)
	{
		contadorVaronesMayor20++;
	}
}

promedioEdades=sumaEdades/cantidadPersonas;

alert("Promedio: "+promedioEdades+" - Edad Menor: "+edadMenor+" - Cant. Varones con Edad mayor o igual a 20: "+contadorVaronesMayor20);