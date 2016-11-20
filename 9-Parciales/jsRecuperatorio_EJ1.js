function CalcularSuperficieCuadrado
{
	//1-realizar el algoritmo que lea la base por ID de un cuadrado e informar la superficie del mismo por alert

	//El área de un cuadrado de lado a es igual al cuadrado de la longitud del lado.  
    //               A = a * a

	var baseCuadrado;
	var superficieCuadrado;

	baseCuadrado=document.getElementById('Cuadrado').value; //leo el valor del ID de Cuadrado ingresado por el usuario
	superficieCuadrado=baseCuadrado*baseCuadrado; //Calculo la superficie del cuadrado.

	alert("La superficie del cuadrado es igual a "+superficieCuadrado);
}