/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
function comenzar()
{
	//Genero la elección de la máquina RANDOM entre 1 y 10
	var numeroSecreto=Math.floor( Math.random()*10)+1;
	primerNumero=numeroSecreto;

	//Genero la elección de la máquina RANDOM entre 1 y 10
	var numeroSecreto=Math.floor( Math.random()*10)+1;
	segundoNumero=numeroSecreto;

	//Genero la elección de la máquina RANDOM entre 1 y 4
	var numeroSecreto=Math.floor( Math.random()*4)+1;
	if(numeroSecreto==1)
	{
		operador="+";
	}
	else
	{
		if(numeroSecreto==1)
		{
			operador="-";
		}
		else
		{
			if(numeroSecreto==3)
			{
				operador="*";
			}
			else
			{
				operador="/";
			} //(numeroSecreto==3)
		} //(numeroSecreto==1)
	} //(numeroSecreto==1)

	document.getElementById('PrimerNumero').value=primerNumero;
	document.getElementById('SegundoNumero').value=segundoNumero;
	document.getElementById('Operador').value=operador;

	temporizador=setTimeout(Responder,4000);
	
}//FIN DE LA FUNCIÓN
function Responder()
{
	var resultado;
	respuesta=parseInt(document.getElementById('Respuesta').value);

	if(operador=="+")
	{
		resultado=parseInt(primerNumero)+parseInt(segundoNumero);
	}
	else
	{
		if(operador=="-")
		{
			resultado=primerNumero-segundoNumero;
		}
		else
		{
			if(operador=="*")
			{
				resultado=primerNumero*segundoNumero;
			}
			else
			{
				resultado=parseInt(primerNumero/segundoNumero);
			} //(operador=="*")
		} //(operador=="-")
	} //(operador=="+")

	if(respuesta==resultado)
	{
		alert("CORRECTO");
	}
	else
	{
		alert("INCORRECTO");
	}

}//FIN DE LA FUNCIÓN
