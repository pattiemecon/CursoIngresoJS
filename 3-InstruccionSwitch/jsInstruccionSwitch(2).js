function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio.");
		break; //si no esta el break sigue ejecutando codigo sin importar los case
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	default: //Enero a Junio
		alert("Falta para el invierno.");
}

/*
if(mesDelAño=="Septiembre" || mesDelAño=="Octubre" || mesDelAño=="Noviembre" || mesDelAño=="Diciembre")
{
	alert("Ya pasamos el frio, ahora calor!!!.");
}
else
{
	if(mesDelAño=="Julio" || mesDelAño=="Agosto")
	{
		alert("Abrigate que hace frio.");
	}
	else
	{
		alert("Falta para el invierno.");
	} //(mesDelAño=="Julio" || mesDelAño=="Agosto")
} //(mesDelAño=="Septiembre" || mesDelAño=="Octubre" || mesDelAño=="Noviembre" || mesDelAño=="Diciembre")
*/

}//FIN DE LA FUNCIÓN