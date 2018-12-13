var xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://acensors.pythonanywhere.com/clientes/?format=json", true);
xhttp.send();

xhttp.onload = function(){
    var div = document.getElementById("contenedorCliente")
    
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }    
    var respuesta = JSON.parse(xhttp.responseText);
    var clientes = respuesta;
    
    var salida = '';

    for (var i = 0; i < clientes.length; i++) {
        salida +='<br><br><article>' + '<h2><b>'+clientes[i].nombre+'</h3></b>' + '<p><b>Dirección: </b>' +clientes[i].direccion+'</p>'+'<p><b>Ciudad: </b>' +clientes[i].ciudad+'</p>'+'<p><b>Teléfono: </b>' +clientes[i].telefono+'</p>'+'<p><b>Email: </b>' +clientes[i].correo+'</p>'+'</article>'+'<p><b>Comuna: </b>' +clientes[i].comuna+'</p>'; 
    }
    document.getElementById('contenedorCliente').innerHTML = salida;
};