
const valorEntrada = 200

var valorSinCategoria = 1
var valorEstudiante   = 0.2
var valorTrainee      = 0.5
var valorJunior       = 0.85

/* rfwerewrwe*/
function calcular()
{   
    var cantidadDeEntradas  = parseInt(document.getElementById("cantidad").value);
    var subtotalEntrada = (cantidadDeEntradas*valorEntrada)

    var select=document.getElementById("opciones");
    var categoriaSeleccionada = select.options[select.selectedIndex].value;

    var descuentoAplicado = 0;

    switch (categoriaSeleccionada=(parseInt(categoriaSeleccionada)))
    {
        case 1:
        descuentoAplicado = descuentoAplicado = valorSinCategoria
        break;

        case 2:
        descuentoAplicado=valorEstudiante
        break;

        case 3: 
        descuentoAplicado=valorTrainee
        break;

        case 4: 
        descuentoAplicado=valorJunior
        break;

    }
    
    console.log(subtotalEntrada*descuentoAplicado) 
    
    resultado = (subtotalEntrada*descuentoAplicado)
     
    document.getElementById("resultado").value = resultado
}

function borrar()
{
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value= "";
    document.getElementById("email").value= "";
    document.getElementById("cantidad").value= "";
    document.getElementById("opciones").value= "";
}

