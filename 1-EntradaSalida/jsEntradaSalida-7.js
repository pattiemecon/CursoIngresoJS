/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/* DECLARO LAS VARIABLES FUERA DEL AMBITO DE LAS FUNCIONES
   PARA NO REDECLARARLAS EN CADA FUNCION POR SEPARADO */
var numeroUno;
var numeroDos;
var resultado;

/* NO FUNCA ASI */
	//numeroUno=document.getElementById('numeroUno').value;
	//numeroDos=document.getElementById('numeroDos').value;

function sumar()
{	

/* NO HACE FALTA SI SE DECLARA FUERA DEL AMBITO DE LAS FUNCIONES */
	/*var numeroUno;
	var numeroDos;
	var resultado;*/

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	// v1.0
	resultado=parseInt(numeroUno)+parseInt(numeroDos);

	// v2.0
	/*numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;*/

	alert("la suma es "+resultado);

}

function restar()
{
/* NO HACE FALTA SI SE DECLARA FUERA DEL AMBITO DE LAS FUNCIONES */
	/*var numeroUno;
	var numeroDos;
	var resultado;*/

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	// No hace falta parseInt para restar
	//resultado=parseInt(numeroUno)-parseInt(numeroDos);
	resultado=numeroUno-numeroDos;

	alert("la resta es "+resultado);
	
}

function multiplicar()
{ 
/* NO HACE FALTA SI SE DECLARA FUERA DEL AMBITO DE LAS FUNCIONES */
	/*var numeroUno;
	var numeroDos;
	var resultado;*/

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	// No hace falta parseInt para multiplicar
	//resultado=parseInt(numeroUno)*parseInt(numeroDos);
	resultado=numeroUno*numeroDos;

	alert("la multiplicacion es "+resultado);
	
}

function dividir()
{
/* NO HACE FALTA SI SE DECLARA FUERA DEL AMBITO DE LAS FUNCIONES */
	/*var numeroUno;
	var numeroDos;
	var resultado;*/

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	// No hace falta parseInt para dividir
	//resultado=parseInt(numeroUno)/parseInt(numeroDos);
	resultado=numeroUno/numeroDos;

	alert("la division es "+resultado);
	
}

