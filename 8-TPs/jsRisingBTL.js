/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	//A.	Edad, entre 18 y 90 años inclusive.
	var edad; //id="Edad"
	edad=prompt("Ingrese Edad, entre 18 y 90 años inclusive");
	edad=parseInt(edad);
	while(edad<18 || edad>90)
	{
		edad=prompt("REIngrese Edad, entre 18 y 90 años inclusive");
	}
	// edad validada
	document.getElementById('Edad').value=edad;

	//B.	Sexo, “M” para masculino y “F” para femenino
	var sexo; //id="Sexo"
	sexo=prompt("Ingrese Sexo, “M” para masculino y “F” para femenino");
	while(sexo!="M" && sexo!="F")
	{
		sexo=prompt("REIngrese Sexo, “M” para masculino y “F” para femenino");
	}
	// sexo validado
	//document.getElementById('Sexo').value=sexo;
	switch(sexo)
	{
		case "M":
			document.getElementById('Sexo').value="M - Masculino";
			break;
		case "F":
			document.getElementById('Sexo').value="F - Femenino";
	}
	
	//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos	
	var estadoCivil; //id="EstadoCivil"
	estadoCivil=prompt("Ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivil=parseInt(estadoCivil);
	while(estadoCivil<1 || estadoCivil>4)
	{
		estadoCivil=prompt("REIngrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}
	// estadoCivil validado
	//document.getElementById('EstadoCivil').value=estadoCivil;
	switch(estadoCivil)
	{
		case 1:
			document.getElementById('EstadoCivil').value="1 - Solteros";
			break;
		case 2:
			document.getElementById('EstadoCivil').value="2 - Casados";
			break;
		case 3:
			document.getElementById('EstadoCivil').value="3 - Divorciados";
			break;
		case 4:
			document.getElementById('EstadoCivil').value="4 - Viudos";
	}

	//D.	Sueldo bruto, no menor a 8000.
	var sueldoBruto; //id="Sueldo"
	sueldoBruto=prompt("Ingrese Sueldo bruto, no menor a 8000.");
	sueldoBruto=parseInt(sueldoBruto);
	while(sueldoBruto<8000)
	{
		sueldoBruto=prompt("REIngrese Sueldo bruto, no menor a 8000.");
	}
	// sueldoBruto validado
	document.getElementById('Sueldo').value=sueldoBruto;

	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	var legajo; //id="Legajo"
	legajo=prompt("Ingrese Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	legajo=parseInt(legajo);
	while(legajo<1000 || legajo>9999)
	{
		legajo=prompt("REIngrese Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.");
	}
	// legajo validado
	document.getElementById('Legajo').value=legajo;

	//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	var nacionalidad; //id="Nacionalidad"
	nacionalidad=prompt("Ingrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacionalidad=prompt("REIngrese Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
	}
	// nacionalidad validado
	//document.getElementById('Nacionalidad').value=nacionalidad;
	switch(nacionalidad)
	{
		case "A":
			document.getElementById('Nacionalidad').value="A - Argentinos";
			break;
		case "E":
			document.getElementById('Nacionalidad').value="E - Extranjeros";
			break;
		case "N":
			document.getElementById('Nacionalidad').value="N - Nacionalizados";
	}
}
