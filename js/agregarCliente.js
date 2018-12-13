var formulario = document.getElementById("formularioRegistrarCliente")

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('https://acensors.pythonanywhere.com/clientes/', {
        method : 'POST',
        body : datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Push.create("Cliente Nuevo",{
                body: "Se ha agregado un cliente, Inicia session para ver sus datos",
                icon: "img/icono_192x192.jpg",
                timeout: 4000,
                onClick: function(){                  
                    window.location.replace("https://alerzi88.github.io/ingresar.html");
                    this.close();
                }
            });
        })
})