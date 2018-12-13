


function ingresoValido() {    
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://acensors.pythonanywhere.com/tecnicos/?format=json", true);
    xhttp.send();
    xhttp.onload = function(){
        

        var correo = document.getElementById("id_email").value
        var password_one = document.getElementById("id_password").value
        var war = document.getElementById("alert")

        var respuesta = JSON.parse(xhttp.responseText);
        var user = respuesta;
        var valida = 0

        for (var i = 0; i < user.length; i++) {

            if(user[i].email == correo && user[i].password == password_one){

                window.location.replace("listar_orden.html");   
                valida = 1   
                break;      
            }
            else{
                valida = 0    
            }            
        }
        
        if(valida == 0)
        {
            document.getElementById("alert").innerHTML = "email o correo invalido"        
        }
    };
    

}