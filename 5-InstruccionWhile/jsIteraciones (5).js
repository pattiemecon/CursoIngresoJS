function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
while(sexo!="m" && sexo!="f")
{
	sexo = prompt("REingrese f ó m .");
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN