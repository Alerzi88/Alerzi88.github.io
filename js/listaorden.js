var xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://acensors.pythonanywhere.com/orden/?format=json", true);
xhttp.send();

xhttp.onload = function(){
    var div = document.getElementById("contenedorOrdenTrabajo")
    
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }    

    var respuesta = JSON.parse(xhttp.responseText);
    var orden = respuesta;
    
    var salida = '';

    for (var i = 0; i < orden.length; i++) {
        salida +=   '<br><br><article>' + '<h2><b>Orden de Trabajo '+ (i+1) +'</h2></b>' + '<p><b>Nombre cliente atendido: </b>' +orden[i].clienteAtendido+'</p>'+'<p><b>Fecha Orden: </b>' +orden[i].Fecha+'</p>'+'<p><b>Hora de Inicio: </b>' +orden[i].horaInicio+'</p>'+'<p><b>Hora de Termino: </b>' +orden[i].horaTermino+'</p>'+'<p><b>ID de Ascensor: </b>' +orden[i].idAscensor+'</p>'+'<p><b>Modelo Ascensor: </b>' +orden[i].modeloAscensor+'</p>'+ '<p><b>Fallas: </b>' +orden[i].fallasDetectadas+'</p>'+'<p><b>Reparación efectuada: </b>' +orden[i].reparacionesEfectuadas+'</p>'+'<p><b>Piezas Cambiadas: </b>' +orden[i].piezasCambiadas+'</p>'+'<p><b>Tecnico: </b>' +orden[i].nombreTrabajador+'</p>'+'</article>'; 
    }

    document.getElementById('contenedorOrdenTrabajo').innerHTML = salida;
};