//iniciar sesión

function iniciar() {
    location.href="Iniciar sesión.html"
}

//politica

function poli() {

        Swal.fire({
        imageUrl: 'https://cg-pelis.netlify.app/Body/Funciones/Iconos/Política.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        title: 'Politica De privacidad',
        html: 'La app recoge datos de caracter personal del usuario como, por ejemplo, nombre, fotografías o localización estos datos no serán compartidos con nadie.<br><br>' +

'En consecuencia la app no comparte ningún dato personal con ninguna otra entidad o terceras personas.<br><br>' +

'Permitimos que terceras compañías publiquen anuncios y recopilen cierta información anónima cuando visite nuestra aplicación. Estas empresas pueden utilizar información anónima, como su ID de publicidad de Google, el tipo y la versión de su dispositivo, la actividad de navegación, la ubicación y otros datos técnicos relacionados con su dispositivo, a fin de proporcionar anuncios.',
        confirmButtonText: 'Aceptar'
    })
}

setTimeout(function() {
    
        Swal.fire({
        imageUrl: 'https://cg-pelis.netlify.app/Body/Funciones/Iconos/Política.png',
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: 'Custom image',
        title: 'Politica De privacidad',
        html: 'La app recoge datos de caracter personal del usuario como, por ejemplo, nombre, fotografías o localización estos datos no serán compartidos con nadie.<br><br>' +

'En consecuencia la app no comparte ningún dato personal con ninguna otra entidad o terceras personas.<br><br>' +

'Permitimos que terceras compañías publiquen anuncios y recopilen cierta información anónima cuando visite nuestra aplicación. Estas empresas pueden utilizar información anónima, como su ID de publicidad de Google, el tipo y la versión de su dispositivo, la actividad de navegación, la ubicación y otros datos técnicos relacionados con su dispositivo, a fin de proporcionar anuncios.',
        confirmButtonText: 'Aceptar'
    })

}, 1000);

//mostrar contraseña

var eye = document.getElementById('Eye');
var input = document.getElementById('signup-password');
eye.addEventListener("click", function(){
    if (input.type == "password") {
         input.type = "text"
         eye.style.opacity=0.8
    }else {
        input.type ="password"
        eye.style.opacity = 0.2
    }
})
