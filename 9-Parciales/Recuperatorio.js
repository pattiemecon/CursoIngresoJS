function PuntoUno
{
    function CalcularSuperficieCuadrado
    {
        //1-realizar el algoritmo que lea la base por ID de un cuadrado e informar la superficie del mismo por alert

        //El área de un cuadrado de lado a es igual al cuadrado de la longitud del lado.  
        //               A = a * a

        var baseCuadrado;
        var superficieCuadrado;

        baseCuadrado=document.getElementById('Cuadrado').value; //leo el valor del ID de Cuadrado ingresado por el usuario
        superficieCuadrado=baseCuadrado*baseCuadrado; //Calculo la superficie del cuadrado.

        alert("La superficie del cuadrado es igual a "+superficieCuadrado);
    } //FIN CalcularSuperficieCuadrado
} //FIN PuntoUno

function PuntoDos
{
//2-realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final
//descontando un (25%) por fin de temporada

    function CalcularPrecioConDescuento
    {
        var precioSinDescuento;
        var montoDescuento;
        var descuento;
        var precioConDescuento;

        precioSinDescuento=prompt("Ingrese el precio de un producto","0"); //Leo el precio por prompt ingresado por el usuario.

        descuento=0.25; //Descuento en valor decimal.

        montoDescuento=precioSinDescuento*descuento; //Calculo el monto de descuento a restar al precio ingresado.
        precioConDescuento=precioSinDescuento-montoDescuento; //Le resto el monto de descuento al precio ingresado.

        alert("El importe final con descuento es igual a "+precioConDescuento); //Muestro el importe final.
    } //FIN CalcularPrecioConDescuento
} //FIN PuntoDos

function PuntoTres
{
//3- realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3 de una compra y luego que
//muestre la suma y el promedio de los precios.

    function CalcularSumaPrecios
    {
        var precioUno;
        var precioDos;
        var precioTres;
        var sumaPrecios;

        precioUno=document.getElementById('Uno').value; //Leo el valor ingresado por el usuario para precio1 por ID
        precioDos=document.getElementById('Dos').value; //Leo el valor ingresado por el usuario para precio2 por ID
        precioTres=document.getElementById('Tres').value; //Leo el valor ingresado por el usuario para precio3 por ID

        sumaPrecios=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres); //Calculo la suma de los tres precios leidos.

        alert("La suma de los precios ingresados es igual a "+sumaPrecios); //Muestro el resultado de la suma
    } //FIN CalcularSumaPrecios

    function CalcularPromedioPrecios
    {
        var precioUno;
        var precioDos;
        var precioTres;
        var sumaPrecios;
        var promedioPrecios;

        precioUno=document.getElementById('Uno').value; //Leo el valor ingresado por el usuario para precio1 por ID
        precioDos=document.getElementById('Dos').value; //Leo el valor ingresado por el usuario para precio2 por ID
        precioTres=document.getElementById('Tres').value; //Leo el valor ingresado por el usuario para precio3 por ID

        sumaPrecios=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres); //Calculo la suma de los tres precios leidos.

        promedioPrecios=sumaPrecios/3; //Calculo el promedio de los tres precios leidos.

        alert("El promedio de los precios ingresados es igual a "+promedioPrecios); //Muestro el resultado del promedio
    } //FIN CalcularPromedioPrecios
} //FIN PuntoTres

function PuntoCuatro
{
    var numero1; // primer número a pedir por prompt
    var numero2; // segundo número a pedir por prompt
    var resultado; // resultado de la suma de numero1 y numero2
    var signoResultado; // signo del resultado a mostrar por document.write

    numero1=prompt("Ingrese el primer numero","0");
    numero2=prompt("Ingrese el segundo numero","0");

    resultado=parseInt(numero1)+parseInt(numero2);

    if(resultado>0)
    {
        signoResultado="POSITIVO";
    }
    else
    {
        if(resultado<0)
        {
            signoResultado="NEGATIVO";
        }
        else
        {
            signoResultado="CERO";
        } //(resultado<0)
    } //(resultado>0)

    document.write("Signo de "+numero1+" + "+numero2+": "+signoResultado);
} //FIN PuntoCuatro

function PuntoCinco
{
    var mes;

    mes=prompt("Ingrese un mes");

    switch(mes)
    {
        case "Enero":
            alert("COMIENZA EL AÑO");
            break;
        case "Diciembre":
            alert("SE VIENEN LAS FIESTAS");
            break;
        default:
            alert("NO ES ENERO, NI DICIEMBRE");
    }

    /*
    if(mes=="Enero")
    {
        alert("COMIENZA EL AÑO");
    }
    else
    {
        if(mes=="Diciembre")
        {
            alert("SE VIENEN LAS FIESTAS");
        }
        else
        {
            alert("NO ES ENERO, NI DICIEMBRE");
        } //(mes=="Diciembre")
    } //(mes=="Enero")
    */
} //FIN PuntoCinco
