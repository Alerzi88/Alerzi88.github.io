var formulario = document.getElementById("formularioRegistroOrden")

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    console.log(datos.get('horainicio'))

    fetch('http://acensors.pythonanywhere.com/orden/', {
        method : 'POST',
        body : datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Push.create("Nueva Orden de Trabajo",{
                body: "Se creo una nueva orden, Si quieres verla inicia session",
                icon: "img/icono_192x192.jpg",
                timeout: 4000,
                onClick: function(){                  
                    window.location.replace("http://alerzi88.github.io/ingresar.html");
                    this.close();
                }
            });

        })
})