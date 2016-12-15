function Mostrar()
{
	var cantidadAlumnos=5;
	var notaAlumno;
	var sexoAlumno;
	var notaMenor;
	var sumaNotas=0;
	var contadorVaronesMayor6=0;
	var promedioNotas;

	for(var contadorAlumnos=0;contadorAlumnos<cantidadAlumnos;contadorAlumnos++)
	{
		notaAlumno=prompt("Ingrese nota del alumno "+(parseInt(contadorAlumnos)+1));
		notaAlumno=parseInt(notaAlumno);
		while(notaAlumno<0 || notaAlumno>10)
		{
			notaAlumno=prompt("REingrese nota del alumno "+(parseInt(contadorAlumnos)+1));
			notaAlumno=parseInt(notaAlumno);
		}

		sexoAlumno=prompt("Ingrese sexo del alumno "+(parseInt(contadorAlumnos)+1));
		while(sexoAlumno!="f" && sexoAlumno!="m")
		{
			sexoAlumno=prompt("REingrese sexo del alumno "+(parseInt(contadorAlumnos)+1));
		}

		sumaNotas=sumaNotas+notaAlumno;

		if(contadorAlumnos==0)
		{
			notaMenor=notaAlumno;
		}
		else
		{
			if(notaAlumno<notaMenor)
			{
				notaMenor=notaAlumno;
			} //(notaAlumno<notaMenor)
		} //(contadorAlumnos==0)

		if(sexoAlumno=="m" && notaAlumno>=6)
		{
			contadorVaronesMayor6++;
		}
	}

	promedioNotas=sumaNotas/cantidadAlumnos;

	alert("Promedio: "+promedioNotas+" - Nota Menor: "+notaMenor+" - Cant. Varones con Nota mayor o igual a 6: "+contadorVaronesMayor6);

/*
	var diasHabiles=24; //cantidad de días hábiles del mes
	var importeVenta; //importe de la venta diaria
	var importeMayor; //importe máximo de venta diaria
	var importeMenor; //importe mínimo de venta diaria

	for(var contadorDias=0;contadorDias<diasHabiles;contadorDias++)
	{
		importeVenta=prompt("Ingrese importe de venta del dia "+(parseInt(contadorDias)+1));
		importeVenta=parseInt(importeVenta);
		while(importeVenta<=0) //valido que el importe ingresado sea positivo
		{
			importeVenta=prompt("REingrese importe de venta del dia "+(parseInt(contadorDias)+1));
			importeVenta=parseInt(importeVenta);
		}

		if(contadorDias==0) //seteo inicial de máximo y mínimo
		{
			importeMenor=importeVenta;
			importeMayor=importeVenta;
		}
		else
		{
			if(importeVenta>importeMayor)
			{
				importeMayor=importeVenta;
			}
			else
			{
				if(importeVenta<importeMenor)
				{
					importeMenor=importeVenta;
				} //(importeVenta<importeMenor)
			} //(importeVenta>importeMayor)
		} //(contadorDias==0)
	}

	alert("Importe Mayor: "+importeMayor+" - Importe Menor: "+importeMenor);
*/

/*
	var numero;
	var contadorDivisores=0;
	numero=prompt("Ingrese numero");
	numero=parseInt(numero);
	while(numero<1)
	{
		numero=prompt("REIngrese numero");
		numero=parseInt(numero);
	}

	for(var indice=2;indice<numero;indice++)
	{
		if(numero%indice==0)
		{
			contadorDivisores++;
		}
	}
	
	if(contadorDivisores==0)
	{
		alert("El numero ingresado es PRIMO");
	}
	else
	{
		alert("El numero ingresado NO es PRIMO");
	}
*/

}//FIN DE LA FUNCIÓN