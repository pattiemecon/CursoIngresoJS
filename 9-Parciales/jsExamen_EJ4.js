var numero1; // primer número a pedir por prompt
var numero2; // segundo número a pedir por prompt
var resultado; // resultado a mostrar por document.write
var operador; // operador resultante segun valores

/*
(numero1>numero2) -> RESTA
(numero1<numero2) -> SUMA
(numero1==numero2) -> MULTIPLICA
*/

numero1=prompt("Ingrese el primer numero","0");
numero2=prompt("Ingrese el segundo numero","0");

if(numero1>numero2)
{
	resultado=numero1-numero2;
	operador="-";
}
else
{
	if(numero1<numero2)
	{
		resultado=parseInt(numero1)+parseInt(numero2);
		operador="+";
	}
	else
	{
		resultado=numero1*numero2;
		operador="*";
	} //(numero1<numero2)
} //(numero1>numero2)

document.write(numero1+" "+operador+" "+numero2+" = "+resultado);