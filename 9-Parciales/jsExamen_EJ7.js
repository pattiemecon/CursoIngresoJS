var cantidadAlumnos=100;
var notaAlumno;
var sexoAlumno;
var notaMenor;
var sumaNotas=0;
var contadorVaronesMayor6=0;
var promedioNotas;

for(var contadorAlumnos=0;contadorAlumnos<cantidadAlumnos;contadorAlumnos++)
{
	notaAlumno=prompt("Ingrese nota del alumno "+(parseInt(contadorAlumnos)+1));
	while(notaAlumno<0 || notaAlumno>10)
	{
		notaAlumno=prompt("REingrese nota del alumno "+(parseInt(contadorAlumnos)+1));
	}
	notaAlumno=parseInt(notaAlumno);

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