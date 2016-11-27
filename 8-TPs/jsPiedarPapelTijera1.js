/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{

	//Genero la elección de la máquina RANDOM entre 1 y 3
	var numeroSecreto=Math.floor( Math.random()*3)+1;

	if(numeroSecreto==1)
	{
		eleccionMaquina="PIEDRA";
	}
	else
	{
		if(numeroSecreto==2)
		{
			eleccionMaquina="PAPEL";
		}
		else
		{
			eleccionMaquina="TIJERA";
		} //(numeroSecreto==2)
	} //(numeroSecreto==1)
	//alert(eleccionMaquina);

	/*
	1 = PIEDRA
	2 = PAPEL
	3 = TIJERA
	*/


}//FIN DE LA FUNCIÓN
function piedra()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	if(eleccionMaquina=="PIEDRA")
	{
		alert("empató");
	}
	else
	{
		if(eleccionMaquina=="PAPEL")
		{
			alert("perdió");
		}
		else
		{
			alert("ganó");
		} //(eleccionMaquina=="PAPEL")
	} //(eleccionMaquina=="PIEDRA")
}//FIN DE LA FUNCIÓN
function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	if(eleccionMaquina=="PIEDRA")
	{
		alert("ganó");
	}
	else
	{
		if(eleccionMaquina=="PAPEL")
		{
			alert("empató");
		}
		else
		{
			alert("perdió");
		} //(eleccionMaquina=="PAPEL")
	} //(eleccionMaquina=="PIEDRA")
}//FIN DE LA FUNCIÓN
function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	if(eleccionMaquina=="PIEDRA")
	{
		alert("perdió");
	}
	else
	{
		if(eleccionMaquina=="PAPEL")
		{
			alert("ganó");
		}
		else
		{
			alert("empató");
		} //(eleccionMaquina=="PAPEL")
	} //(eleccionMaquina=="PIEDRA")
}//FIN DE LA FUNCIÓN