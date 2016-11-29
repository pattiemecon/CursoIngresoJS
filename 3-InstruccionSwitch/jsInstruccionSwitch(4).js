function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
		alert("tiene 28 días");
		break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("tiene 30 días");
		break;
	default:
		alert("tiene 31 días");
}

/*
if(mesDelAño=="Febrero")
{
	alert("tiene 28 días");
}
else
{
	if(mesDelAño=="Abril" || mesDelAño=="Junio" || mesDelAño=="Septiembre" || mesDelAño=="Noviembre")
	{
		alert("tiene 30 días");
	}
	else
	{
		alert("tiene 31 días");
	} //(mesDelAño=="Abril" || mesDelAño=="Junio" || mesDelAño=="Septiembre" || mesDelAño=="Noviembre")
} //(mesDelAño=="Febrero")
*/


}//FIN DE LA FUNCIÓN