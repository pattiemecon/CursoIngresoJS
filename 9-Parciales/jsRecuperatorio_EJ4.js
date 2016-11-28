var numero1; // primer número a pedir por prompt
var numero2; // segundo número a pedir por prompt
var resultado; // resultado de la suma de numero1 y numero2
var signoResultado; // signo del resultado a mostrar por document.write

numero1=prompt("Ingrese el primer numero","0");
numero2=prompt("Ingrese el segundo numero","0");

resultado=parseInt(numero1)+parseInt(numero2);

if(resultado>0)
{
	signoResultado="POSITIVO";
}
else
{
	if(resultado<0)
	{
		signoResultado="NEGATIVO";
	}
	else
	{
		signoResultado="CERO";
	} //(resultado<0)
} //(resultado>0)

document.write("Signo de "+numero1+" + "+numero2+": "+signoResultado);