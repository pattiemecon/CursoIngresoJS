/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var n1;
	var n2;
	var resultado;

	n1=document.getElementById('numeroUno').value;
	n2=document.getElementById('numeroDos').value;

	resultado=parseInt(n1)+parseInt(n2);

	alert("la suma es "+resultado);

}

