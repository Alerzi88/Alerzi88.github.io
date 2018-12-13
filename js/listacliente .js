var xhttp = new XMLHttpRequest();

xhttp.open("GET", "https://acensors.pythonanywhere.com/clientes/?format=json", true);
xhttp.send();

xhttp.onload = function(){
    var division = document.getElementById("contenedorCliente")
    
    while (division.firstChild) {
        division.removeChild(division.firstChild);
    }    

    var response = JSON.parse(xhttp.responseText);
    var clientes = response;
    
    var output = '';

    for (var i = 0; i < clientes.length; i++) {
            output +=   '<br><br><article>' + '<h2><b>'+clientes[i].nombre+'</h3></b>' + '<p><b>Dirección: </b>' +clientes[i].direccion+'</p>'
                        +'<p><b>Ciudad: </b>' +clientes[i].ciudad+'</p>'+'<p><b>Teléfono: </b>' +clientes[i].telefono+'</p>'
                        +'<p><b>Email: </b>' +clientes[i].correo+'</p>'+'</article>'+'<p><b>Comuna: </b>' +clientes[i].comuna+'</p>';                   
    }

    document.getElementById('contenedorCliente').innerHTML = output;
};