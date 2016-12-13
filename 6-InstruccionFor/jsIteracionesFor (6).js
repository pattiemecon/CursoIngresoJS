function Mostrar()
{

var numeroRandom;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;
var cont5=0;
var cont6=0;
var cont7=0;
var cont8=0;
var cont9=0;
var cont10=0;
var par=0;
var impar=0;
var sumaPar=0;
var sumaImpar=0;
var todosSalieron=0;
var encontrado=0;
var total;

for(var contador=0;contador<10000;contador++)
{

	total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;

	numeroRandom=Math.floor((Math.random() * 10) + 1);
	//console.log(contador+" - "+numeroRandom);
	switch(numeroRandom)
	{
		case 1:
			cont1++;
			break;
		case 2:
			cont2++;
			break;
		case 3:
			cont3++;
			break;
		case 4:
			cont4++;
			break;
		case 5:
			if(parseInt((cont5/total)*100)>=7)
			{
				contador--;
//continue vuelve a ejecutar el bucle for, a diferencia de break que directamente te saca del mismo
				continue;
			}
			else
			{
				cont5++;
			}
			break;
		case 6:
			cont6++;
			break;
		case 7:
			cont7++;
			break;
		case 8:
			cont8++;
			break;
		case 9:
			cont9++;
			break;
		case 10:
			cont10++;
	} //fin switch

	if(numeroRandom%2==0)
	{
		par++;
		sumaPar=sumaPar+numeroRandom;
	}
	else
	{
		impar++;
		sumaImpar=sumaImpar+numeroRandom;
	} //fin if - else

	if(encontrado==0)
	{
		if(cont1>0&&cont2>0&&cont3>0&&cont4>0&&cont5>0&&cont6>0&&cont7>0&&cont8>0&&cont9>0&&cont10>0)
		{
			encontrado=1;
			todosSalieron=contador;
		}
	}
}

total=cont1+cont2+cont3+cont4+cont5+cont6+cont7+cont8+cont9+cont10;

console.log("El Numero 1 salio "+cont1+" veces -> Porcentaje: "+parseInt((cont1/total)*100)+"%");
console.log("El Numero 2 salio "+cont2+" veces -> Porcentaje: "+parseInt((cont2/total)*100)+"%");
console.log("El Numero 3 salio "+cont3+" veces -> Porcentaje: "+parseInt((cont3/total)*100)+"%");
console.log("El Numero 4 salio "+cont4+" veces -> Porcentaje: "+parseInt((cont4/total)*100)+"%");
console.log("El Numero 5 salio "+cont5+" veces -> Porcentaje: "+parseInt((cont5/total)*100)+"%");
console.log("El Numero 6 salio "+cont6+" veces -> Porcentaje: "+parseInt((cont6/total)*100)+"%");
console.log("El Numero 7 salio "+cont7+" veces -> Porcentaje: "+parseInt((cont7/total)*100)+"%");
console.log("El Numero 8 salio "+cont8+" veces -> Porcentaje: "+parseInt((cont8/total)*100)+"%");
console.log("El Numero 9 salio "+cont9+" veces -> Porcentaje: "+parseInt((cont9/total)*100)+"%");
console.log("El Numero 10 salio "+cont10+" veces -> Porcentaje: "+parseInt((cont10/total)*100)+"%");
console.log("Cantidad de Pares: "+par+" -> Porcentaje: "+parseInt((par/total)*100)+"%");
console.log("Cantidad de Impares: "+impar+" -> Porcentaje: "+parseInt((impar/total)*100)+"%");
console.log("Suma de Pares: "+sumaPar);
console.log("Suma de Impares: "+sumaImpar);
console.log("Total: "+total+" veces");
console.log("Salieron todos los numeros en la vuelta "+todosSalieron);

	/*
	var limite;
	var contadorPares=0;
	limite=prompt("Ingrese limite");
	limite=parseInt(limite);
	while(limite<1)
	{
		limite=prompt("REIngrese limite");
		limite=parseInt(limite);
	}

	for(var indice=2;indice<=limite;indice=indice+2)
	{
		contadorPares++;
		document.write("<br>"+indice);
	}
	document.write("<br>Cantidad de Pares encontrados: "+contadorPares);
	*/
/*
	var limite;
	var contadorPares=0;
	limite=prompt("Ingrese limite");
	limite=parseInt(limite);
	while(limite<1)
	{
		limite=prompt("REIngrese limite");
		limite=parseInt(limite);
	}

	for(var indice=1;indice<=limite;indice++)
	{
		if(indice%2==0)
		{
			contadorPares++;
			document.write("<br>"+indice);
		}
	}
	document.write("<br>Cantidad de Pares encontrados: "+contadorPares);
*/
}//FIN DE LA FUNCIÓN