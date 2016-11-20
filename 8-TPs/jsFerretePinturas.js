/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	//Fahrenheit a Celsius	(°F - 32) x 100/180 = °C

	var temperaturaFarenheit;
	var temperaturaCentigrados;

	temperaturaFarenheit=document.getElementById('Temperatura').value; //obtengo el valor ingresado por el usuario

	temperaturaCentigrados=temperaturaFarenheit-32; //resuelvo el primer termino de la formula
	temperaturaCentigrados=temperaturaCentigrados*100/180; //termino de resolver la formula.

	alert(temperaturaFarenheit+" Fahrenheit son "+temperaturaCentigrados+" centígrados"); //muestro el resultado al usuario.

}

function CentigradosFahrenheit () 
{
	//Celsius a Fahrenheit	(°C × 180/100) + 32 = °F

	var temperaturaFarenheit;
	var temperaturaCentigrados;

	temperaturaCentigrados=document.getElementById('Temperatura').value; //obtengo el valor ingresado por el usuario

	temperaturaFarenheit=temperaturaCentigrados*180/100; //resuelvo el primer termino de la formula
	temperaturaFarenheit=temperaturaFarenheit+32; //termino de resolver la formula.

	alert(temperaturaCentigrados+" centígrados son "+temperaturaFarenheit+" Fahrenheit"); //muestro el resultado al usuario.
	
}
