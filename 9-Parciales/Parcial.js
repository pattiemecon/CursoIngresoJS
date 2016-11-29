function PuntoUno
{
    function CalcularPerimetroCuadrado
    {
        //1-realizar el algoritmo que lea la base por ID de un cuadrado e informar el perímetro del mismo por alert.

        //El perímetro de un cuadrado de lado a es cuatro veces el valor del lado
        //               P = 4 * a

        var baseCuadrado;
        var perimetroCuadrado;

        baseCuadrado=document.getElementById('Cuadrado').value; //leo el valor del ID de Cuadrado ingresado por el usuario
        perimetroCuadrado=4*baseCuadrado; //Calculo el perimetro del cuadrado.

        alert("El perimetro del cuadrado es igual a "+perimetroCuadrado);
    } //FIN CalcularPerimetroCuadrado
} //FIN PuntoUno

function PuntoDos
{
// 2-realiazar el algoritmo que lea un importe por de un producto por prompt y muestre el importe final
//   sumándole el IVA (21%).

    function CalcularPrecioMasIVA
    {
        var precioSinIVA;
        var montoIVA;
        var IVA;
        var precioConIVA;

        precioSinIVA=prompt("Ingrese el precio de un producto","0"); //Leo el precio por prompt ingresado por el usuario.
        precioSinIVA=parseInt(precioSinIVA); //Convierto a entero el precio sin iva leido por prompt para poderlo sumar.

        IVA=0.21 //IVA en valor decimal.

        montoIVA=precioSinIVA*IVA; //Calculo el monto de IVA a adicionar al precio ingresado.
        precioConIVA=precioSinIVA+montoIVA; //Le adiciono el monto de IVA al precio ingresado.

        alert("El importe final con IVA es igual a "+precioConIVA); //Muestro el importe final.
    } //FIN CalcularPrecioMasIVA
} //FIN PuntoDos

function PuntoTres
{
//3- realizar el algoritmo que tome por ID dos datos, el largo y ancho de un terreno y luego que muestre
//   cuantos metros de alambre se necesitan para colocarle 3 hilos de alambrado a su perímetro.

    function CalcularCantidadAlambre
    {
        var largoTerreno;
        var anchoTerreno;
        var cantidadHilos;
        var perimetroTerreno;
        var cantidadAlambre;

        largoTerreno=document.getElementById('Largo').value; //leo el valor del ID del Largo del Terreno ingresado por el usuario.
        anchoTerreno=document.getElementById('Ancho').value; //leo el valor del ID del Ancho del Terreno ingresado por el usuario.
        cantidadHilos=3; //cantidad de hilos de alambre a colocar al terreno.

        /* El rectángulo tiene los lados iguales dos a dos, por tanto:
           P = 2 * a + 2 * b */

        //Calculo el perimetro del Terreno, que es la cantidad de alambre si se alambra con un solo hilo
        perimetroTerreno=parseInt(largoTerreno*2)+parseInt(anchoTerreno*2);

        //Calculo la cantidad total de alambre, de acuerdo a la cantidad de hilos necesarios.
        cantidadAlambre=perimetroTerreno*cantidadHilos;

        alert("La cantidad de alambre necesaria para colocarle 3 hilos de alambrado al perímetro del Terreno es "+cantidadAlambre);
    } //FIN CalcularCantidadAlambre
} //FIN PuntoTres

function PuntoCuatro
{
    var numero1; // primer número a pedir por prompt
    var numero2; // segundo número a pedir por prompt
    var resultado; // resultado a mostrar por document.write
    var operador; // operador resultante segun valores

    /*
    (numero1>numero2) -> RESTA
    (numero1<numero2) -> SUMA
    (numero1==numero2) -> MULTIPLICA
    */

    numero1=prompt("Ingrese el primer numero","0");
    numero2=prompt("Ingrese el segundo numero","0");

    if(numero1>numero2)
    {
        resultado=numero1-numero2;
        operador="-";
    }
    else
    {
        if(numero1<numero2)
        {
            resultado=parseInt(numero1)+parseInt(numero2);
            operador="+";
        }
        else
        {
            resultado=numero1*numero2;
            operador="*";
        } //(numero1<numero2)
    } //(numero1>numero2)

    document.write(numero1+" "+operador+" "+numero2+" = "+resultado);
} //FIN PuntoCuatro

function PuntoCinco
{
    var diaSemana;

    diaSemana=prompt("Ingrese un dia de la semana");

    switch(diaSemana)
    {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            alert("a trabajar !!!");
            break;
        case "Sabado":
        case "Domingo":
            alert("es fin de semana");
    }

    /*
    if(diaSemana=="Lunes" || diaSemana=="Martes" || diaSemana=="Miércoles" || diaSemana=="Jueves" || diaSemana=="Viernes")
    {
        alert("a trabajar !!!");
    }
    else
    {
        if(diaSemana=="Sábado" || diaSemana=="Domingo")
        {
            alert("es fin de semana");
        } //(diaSemana=="Sábado" || diaSemana=="Domingo")
    } //(diaSemana=="Lunes" || diaSemana=="Martes" || diaSemana=="Miércoles" || diaSemana=="Jueves" || diaSemana=="Viernes")
    */
} //FIN PuntoCinco
