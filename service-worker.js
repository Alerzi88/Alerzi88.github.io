var cacheName = "AscensorS-v1";
var filesToCache = [
    "/",
    "/index.html",
    "/ingresar.html",
    "/listar_orden.html",
    "/listar_cliente.html",
    "/registrar_cliente.html",
    "/registro_orden.html",
    "/js/app.js",
    "/js/listaorden.js",
    "/js/listacliente.js",
    "/js/login.js",
    "/js/registrarOrden.js",
    "/js/agregarCliente.js",
    "/js/validar.js",
    "/js/push.min.js",
    "/img/portada.jpg",
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
    "/img/11.jpg",
    "/img/12.jpg", 
    "/img/as1.jpg",
    "/img/as2.jpg",
    "/img/as3.jpg",
    "/img/as4.jpg",
    "/img/empresa.png",
    "/img/certificado.png",
    "/img/checklist.png",
    "/img/modernizacion.png",
    "/img/reparacion.png",
    "/img/socios.png",
    "/img/twitter.png",
    "/img/facebook.png",
    "/img/instagram.png",
    "/img/icono_125x125.jpg",
    "/img/icono_152x152.jpg",
    "/img/icono_192x192.jpg",
    "/img/icono_225x225.jpg",
    "/style/portada.css",
    "/style/cuadricula.css",
    "/style/login.css",
    "/style/main.css",   
    "/style/menu.css",
    "/style/registrorden.css",
    "/style/registrocliente.css",
];

self.addEventListener( 'install', function( e ) {
    console.log( '[ServiceWorker] Install' );
    e.waitUntil(
        caches.open( cacheName ).then( function( cache ) {
            console.log( '[ServiceWorker] Caching app shell' );
            return cache.addAll( filesToCache );
        } )
    );
} );

self.addEventListener( 'activate', function( e ) {
    console.log( '[ServiceWorker] Activate' );
    e.waitUntil(
        caches.keys( ).then( function( keyList ) {
            return Promise.all( keyList.map( function( key ) {
                if ( key != cacheName ) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete( key );
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener( 'fetch', function( e ) {
    console.log( '[ServiceWorker] Fetch', e.request.url );
    e.respondWith(
        caches.match( e.request ).then( function( response ) {
            return response || fetch( e.request );
        } )
    );
} );