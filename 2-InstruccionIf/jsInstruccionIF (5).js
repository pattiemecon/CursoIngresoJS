function Mostrar()
{
//tomo la edad  

	var laEdad;
	laEdad=document.getElementById('edad').value;

	//if(!(laEdad>=13 && laEdad<=17)) // and negado
	if (laEdad<13 || laEdad>17) // or
	{
		alert("NO es adolescente");
	}

}//FIN DE LA FUNCIÓN