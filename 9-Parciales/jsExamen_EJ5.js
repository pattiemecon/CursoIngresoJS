var diaSemana;

diaSemana=prompt("Ingrese un dia de la semana");

switch(diaSemana)
{
	case "Lunes":
	case "Martes":
	case "Miercoles":
	case "Jueves":
	case "Viernes":
		alert("a trabajar !!!");
		break;
	case "Sabado":
	case "Domingo":
		alert("es fin de semana");
}

/*
if(diaSemana=="Lunes" || diaSemana=="Martes" || diaSemana=="Miércoles" || diaSemana=="Jueves" || diaSemana=="Viernes")
{
	alert("a trabajar !!!");
}
else
{
	if(diaSemana=="Sábado" || diaSemana=="Domingo")
	{
		alert("es fin de semana");
	} //(diaSemana=="Sábado" || diaSemana=="Domingo")
} //(diaSemana=="Lunes" || diaSemana=="Martes" || diaSemana=="Miércoles" || diaSemana=="Jueves" || diaSemana=="Viernes")
*/
