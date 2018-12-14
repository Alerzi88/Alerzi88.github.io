var formulario = document.getElementById("formularioRegistroOrden")

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos_form = new FormData(formulario);

    fetch('https://acensors.pythonanywhere.com/orden/', {
        method : 'POST',
        body : datos_form
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Push.create("Nueva Orden de Trabajo",{
                body: "Se creo una nueva orden, Si quieres verla ve a ´Ordenes´",
                icon: "img/icono_192x192.jpg",
                timeout: 4000,
                onClick: function(){                  
                    window.location.replace("https://alerzi88.github.io/listar_orden.html");
                    this.close();
                }
            });

        })
})