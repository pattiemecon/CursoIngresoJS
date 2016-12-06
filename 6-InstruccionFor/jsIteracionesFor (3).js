function Mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
var contador;
repeticiones=parseInt(repeticiones);
while(repeticiones<1)
{
	repeticiones = prompt("REingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones);
}
for(contador=0;contador<repeticiones;contador++)
{
	document.write("<br>Hola UTN FRA");
}

}//FIN DE LA FUNCIÓN