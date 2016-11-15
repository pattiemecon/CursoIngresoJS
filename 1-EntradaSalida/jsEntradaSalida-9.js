/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	// opc mia
	/*resultado=sueldo*1.1;

	document.getElementById('resultado').value=resultado;*/

	// opc profe
	resultado=parseInt(sueldo)+(sueldo/100*10);
	document.getElementById('resultado').value="Su sueldo se aumento a "+resultado;
	
}
