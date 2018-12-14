//VALIDADOR CLIENTE
function sinNumeros(){
    var noAdmitido = [0,1,2,3,4,5,6,7,8,9,";","+", "-", "?", "¿", 
                    "¡", "!", ".", ",", "/", "#", "$", "%", "(", ")"]
    var nombre = document.getElementById("id_nombre")
    var ciudad = document.getElementById("id_ciudad")
    var comuna = document.getElementById("id_comuna")

    for(let i in numbers){
        nombre.value = nombre.value.replace(noAdmitido[i], "")
        ciudad.value = ciudad.value.replace(noAdmitido[i], "")
        comuna.value = comuna.value.replace(noAdmitido[i], "")
    }
}


function SinLetras(){
    var CaracteresNoValidos = 
        [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
            "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
            "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
            "/", "(", ")", "=", "?", "¿", "¡", ".", ",", "*", "|", "´", "{", "}", "-"
        ]
    var Telefono = document.getElementById("id_telefono")

        //Transformo a minusculas 
    Telefono.value = Telefono.value.toLowerCase()



    for(let i in CaracteresNoValidos){
        Telefono.value = Telefono.value.replace(CaracteresNoValidos[i], "")
    }
}


//------------------------------------------------------------------------------------------------------------


function sinNumerosT(){
    var noAdmitido = [0,1,2,3,4,5,6,7,8,9,";","+", "-", "?", "¿", 
    "¡", "!", ".", ",", "/", "#", "$", "%", "(", ")"]
    var cliente = document.getElementById("id_cliente")
    var tecnico = document.getElementById("id_tecnico")

    for(let i in noAdmitido){
        cliente.value = cliente.value.replace(noAdmitido[i], "")
        tecnico.value = tecnico.value.replace(noAdmitido[i], "")
    }
}

// VALIDANDO QUE NO SE INGRESEN LETRAS
function SinLetrasT(){
    var CaracteresNoValidos = 
        [   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
            "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", 
            "v", "w", "x", "y", "z", ",", ".", "!", "'", "$", "%", "&",
            "/", "(", ")", "=", "?", "¿", "¡", ".", ",", "*", "|", "´", "{", "}", "-"
        ]
    var idAscensor = document.getElementById("id_ascensor")

    //Transformo a minusculas 
    idAscensor.value = idAscensor.value.toLowerCase()


    for(let i in CaracteresNoValidos){
        idAscensor.value = idAscensor.value.replace(CaracteresNoValidos[i], "")
    }
}

function ValidarFecha(){
    
    var fechainicio = document.getElementById("id_horainicio").value;
    var fechatermino = document.getElementById("id_horatermino").value;
    console.log(fechainicio);
    console.log(fechatermino);
    
        if(fechainicio>fechatermino)
        {
            console.log("Fecha Invalida");
        }
        else
        {
            console.log("Fecha Valida");
        }
    
    
}
