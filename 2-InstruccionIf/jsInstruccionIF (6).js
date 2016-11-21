function Mostrar()
{
//tomo la edad  

	var laEdad;
	laEdad=document.getElementById('edad').value;

	/*if(laEdad>17)
	{
		alert("Es mayor de edad");
	}
	if(laEdad<=17 && laEdad>=13)
	{
		alert("Es adolescente");
	}
	if(laEdad<13)
	{
		alert("Es niño");
	}*/

	if(laEdad>17)
	{
		alert("Es mayor de edad");
	} //if(laEdad>17)
	else
	{
		if(laEdad<13)
		{
			alert("Es niño");
		} //if(laEdad<13)
		else
		{
			alert("Es adolescente");
		} //else(laEdad<13)
	} //else(laEdad>17)


}//FIN DE LA FUNCIÓN