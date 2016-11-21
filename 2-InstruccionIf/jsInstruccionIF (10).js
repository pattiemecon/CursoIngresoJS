function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var notaExamen;
	notaExamen=Math.floor((Math.random()*10)+1);

	if(notaExamen>=9)
	{
		alert("EXCELENTE");
	} //if(notaExamen>=9)
	else
	{
		if(notaExamen<4)
		{
			alert("Vamos, la proxima se puede");
		} //if(notaExamen<4)
		else
		{
			alert("APROBO");
		} //else(notaExamen<4)
	} //else(notaExamen>=9)

}//FIN DE LA FUNCIÓN