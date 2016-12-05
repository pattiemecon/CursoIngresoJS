function Mostrar()
{
	//alert('iteración while');

// <br> -> Retorno de carro
// <h1> hasta <h6> -> distintos tipos de encabezado
// <p> -> define un párrafo

	var contador;
	contador=0;
	document.write("<h1>bienvenidos</h1>");

	while(contador<10)
	{
		contador++;
		document.write("<br>El contador es: "+contador);
	}
	document.write("<p>termino</p>");

/* mi version - No acorde a la regla nemotécnica que indica el profe
	var contador;
	contador=1;

	while(contador<=10)
	{
		document.write(contador);
		contador++;
	}
	document.write("termino");
 mi version */


}//FIN DE LA FUNCIÓN