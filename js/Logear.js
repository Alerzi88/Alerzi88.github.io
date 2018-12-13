function ingresoValido() {    
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://acensors.pythonanywhere.com/tecnicos/?format=json", true);
    xhttp.send();

    xhttp.onload = function(){
        console.log("no") 

        var correo = document.getElementById("id_email").value
        var contraseña = document.getElementById("id_password").value
        var war = document.getElementById("warning")

        console.log(correo) 
        console.log(contraseña)   

        var response = JSON.parse(xhttp.responseText);
        var usuario = response;
        var valida = 0

        for (var i = 0; i < usuario.length; i++) {

            if(usuario[i].email == correo && usuario[i].password == contraseña){
                window.location.replace("listar_orden.html");  
                console.log("si")
                valida = 1   
                break;      
            }
            else{
                valida = 0
                console.log("no")  
                console.log(usuario[i].email)
                console.log(usuario[i].password)     
            }            
        }
        
        if(valida == 0)
        {
            document.getElementById("warning").innerHTML = "Email o Contraseña incorrectos"        
        }
    };
}