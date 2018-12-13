var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://acensors.pythonanywhere.com/clientes/?format=json", true);
xhttp.send();

xhttp.onload = function(){
    var division = document.getElementById("contenedorCliente")
    
    while (division.firstChild) {
        division.removeChild(division.firstChild);
    }    

    var response = JSON.parse(xhttp.responseText);
    var cliente = response;
    
    var output = '';

    for (var i = 0; i < cliente.length; i++) {
            output +=   '<br><br><article>' + '<h2><b>'+cliente[i].nombre+'</h3></b>' + '<p><b>Dirección: </b>' +cliente[i].direccion+'</p>'
                        +'<p><b>Ciudad: </b>' +cliente[i].ciudad+'</p>'+'<p><b>Teléfono: </b>' +cliente[i].telefono+'</p>'
                        +'<p><b>Email: </b>' +cliente[i].correo+'</p>'+'</article>'+'<p><b>Comuna: </b>' +cliente[i].comuna+'</p>';                   
    }

    document.getElementById('contenedorCliente').innerHTML = output;
};