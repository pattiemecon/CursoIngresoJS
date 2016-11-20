function CalcularPerimetroCuadrado
{
	//1-realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert.

	//El perímetro de un cuadrado de lado a es cuatro veces el valor del lado
    //               P = 4 * a

	var baseCuadrado;
	var perimetroCuadrado;

	baseCuadrado=document.getElementById('Cuadrado').value; //leo el valor del ID de Cuadrado ingresado por el usuario
	perimetroCuadrado=4*baseCuadrado; //Calculo el perimetro del cuadrado.

	alert("El perimetro del cuadrado es igual a "+perimetroCuadrado);
}