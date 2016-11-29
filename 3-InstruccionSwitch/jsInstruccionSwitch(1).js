function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Enero":
		alert("que comiences bien el año!!!.");
		break;
	case "Marzo":
		alert("a clases!!!.");
		break;
	case "Julio":
		alert("se vienen las vacaciones!!!.");
		break;
	case "Diciembre":
		alert("Felices fiesta!!!.");
}

/*
if(mesDelAño=="Enero")
{
	alert("que comiences bien el año!!!.");
}
else
{
	if(mesDelAño=="Marzo")
	{
		alert("a clases!!!.");
	}
	else
	{
		if(mesDelAño=="Julio")
		{
			alert("se vienen las vacaciones!!!.");
		}
		else
		{
			if(mesDelAño=="Diciembre")
			{
				alert("Felices fiesta!!!.");
			} //mesDelAño=="Diciembre"
		} //mesDelAño=="Julio"
	} //mesDelAño=="Marzo"
} //mesDelAño=="Enero"
*/


}//FIN DE LA FUNCIÓN