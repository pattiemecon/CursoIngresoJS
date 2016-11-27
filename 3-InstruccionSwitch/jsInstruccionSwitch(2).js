function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

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


}//FIN DE LA FUNCIÓN