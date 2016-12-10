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

function PuntoSeis
{
    var diasHabiles=24;
    var importeVenta;
    var importeMayor;
    var importeMenor;

    for(var contadorDias=0;contadorDias<diasHabiles;contadorDias++)
    {
        importeVenta=prompt("Ingrese importe de venta del dia "+(parseInt(contadorDias)+1));
        while(importeVenta<=0)
        {
            importeVenta=prompt("REingrese importe de venta del dia "+(parseInt(contadorDias)+1));
        }
        importeVenta=parseInt(importeVenta);

        if(contadorDias==0)
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
} //FIN PuntoSeis

function PuntoSiete
{
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
} //FIN PuntoSiete

function PuntoOcho
{
    var continuaCarga="si";
    var numeroIngresado;
    var numeroMayor;
    var numeroMenor;
    var contadorNumeros=0;
    var sumaNumeros=0;
    var promedioNumeros;
    var contadorPares=0;

    while(continuaCarga=="si")
    {
        numeroIngresado=prompt("Ingrese un numero positivo");
        while(numeroIngresado<=0)
        {
            numeroIngresado=prompt("REingrese un numero positivo");
        }
        numeroIngresado=parseInt(numeroIngresado);

        if(contadorNumeros==0)
        {
            numeroMenor=numeroIngresado;
            numeroMayor=numeroIngresado;
        }
        else
        {
            if(numeroIngresado>numeroMayor)
            {
                numeroMayor=numeroIngresado;
            }
            else
            {
                if(numeroIngresado<numeroMenor)
                {
                    numeroMenor=numeroIngresado;
                } //(numeroIngresado<numeroMenor)
            } //(numeroIngresado>numeroMayor)
        } //(contadorNumeros==0)
        contadorNumeros++;
        sumaNumeros=sumaNumeros+numeroIngresado;

        if(numeroIngresado%2==0)
        {
            contadorPares++;
        }

        continuaCarga=prompt("Continua con la carga de numeros? (si/no)","si");
    }

    promedioNumeros=sumaNumeros/contadorNumeros;

    document.write("<br>a) cantidad de numeros pares: "+contadorPares);
    document.write("<br>b) promedio de todos los numeros ingresados: "+promedioNumeros);
    document.write("<br>c) suma de todos los numeros: "+sumaNumeros);
    document.write("<br>d) numero maximo: "+numeroMayor);
    document.write("<br>d) numero minimo: "+numeroMenor);   
}