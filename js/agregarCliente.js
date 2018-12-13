var formulario = document.getElementById("formularioRegistrarCliente")

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos_form = new FormData(formulario);

    fetch('https://acensors.pythonanywhere.com/clientes/', {
        method : 'POST',
        body : datos_form
    })
        .then(res => res.json())
        .then(data => {
            Push.create("Cliente Nuevo",{
                body: "Se ha agregado un cliente",
                icon: "img/icono_192x192.jpg",
                timeout: 4000,
                onClick: function(){                  
                    window.location.replace("https://alerzi88.github.io/listar_cliente.html");
                    this.close();
                }
            });
        })
})