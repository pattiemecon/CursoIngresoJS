var mes;

mes=prompt("Ingrese un mes");

switch(mes)
{
	case "Enero":
		alert("COMIENZA EL AÑO");
		break;
	case "Diciembre":
		alert("SE VIENEN LAS FIESTAS");
		break;
	default:
		alert("NO ES ENERO, NI DICIEMBRE");
}

/*
if(mes=="Enero")
{
	alert("COMIENZA EL AÑO");
}
else
{
	if(mes=="Diciembre")
	{
		alert("SE VIENEN LAS FIESTAS");
	}
	else
	{
		alert("NO ES ENERO, NI DICIEMBRE");
	} //(mes=="Diciembre")
} //(mes=="Enero")
*/
