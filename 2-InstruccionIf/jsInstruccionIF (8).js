function Mostrar()
{
//tomo la edad  

	var laEdad;
	var estadoCivil;
	laEdad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(laEdad>=18 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN