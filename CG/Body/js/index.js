// Importa las funciones necesarias desde Firebase Authentication
import { updateProfile, updateEmail, updatePassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// Importa funciones necesarias desde Firebase Storage
import { ref , uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";

// Importa objetos 'auth' y 'storage' desde tu archivo "./app/firebase.js"
import { auth, storage } from "./app/firebase.js";

// Declara una variable para el objeto Cropper
let cropper = null;

// Evento cuando se selecciona una nueva foto
$('#new-foto').on('change', () => {
    // Obtiene elementos del DOM
    let image = document.getElementById('img-cropper');
    let input = document.getElementById('new-foto');

    // Obtiene la lista de archivos seleccionados
    let archivos = input.files;

    // Verifica si hay archivos seleccionados
    if (!archivos || !archivos.length) {        
        // Limpiar la imagen y el input si no hay archivos
        image.src = "";
        input.value = "";
    } else {
        // Crea una URL de objeto para la primera imagen
        let imagenUrl = URL.createObjectURL(archivos[0]);
        image.src = imagenUrl;

        // Configura el objeto Cropper para la imagen
        cropper = new Cropper(image, {
            aspectRatio: 1, // Proporción en la que se recortará (1:1)
            preview: '.img-sample', // Contenedor de vista previa en tiempo real
            zoomable: false, // No permite hacer zoom 
            viewMode: 1, // No estira la imagen al contenedor
            responsive: false, // No reacomoda la imagen al contenedor con zoom
            dragMode: 'none', // No hace nada al arrastrar
            ready() {
                // Método cuando Cropper está activo, ajusta el tamaño del contenedor al 100%
                document.querySelector('.cropper-container').style.width = '100%';
                document.querySelector('.cropper-container').style.height = '100%';
            }
        });

        // Muestra el modal y ajusta las clases para hacerlo visible
        $('.modal').addClass('active');
        $('.modal-content').addClass('active');
        $('.modal').removeClass('remove');
        $('.modal-content').removeClass('remove');
    }
});

// Evento para cerrar el modal
$('#close').on('click', () => {
    // Obtiene elementos del DOM
    let image = document.getElementById('img-cropper');
    let input = document.getElementById('new-foto');

    // Limpia la imagen y el input
    image.src = "";
    input.value = "";

    // Destruye el objeto Cropper
    cropper.destroy();

    // Ajusta las clases del modal para ocultarlo
    $('.modal').addClass('remove');
    $('.modal-content').addClass('remove');
    $('.modal').removeClass('active');
    $('.modal-content').removeClass('active');
});

// Evento para recortar la imagen
$('#cut').on('click', () => {
    // Obtiene elementos del DOM
    let crop_image = document.getElementById('crop-image');
    const canva = cropper.getCroppedCanvas();
    let image = document.getElementById('img-cropper');
    let input = document.getElementById('new-foto');
    const imgg = document.getElementById('icon');
    const img = document.getElementById('photo');

    // Obtén la imagen recortada como un objeto de lienzo (canvas)
    canva.toBlob(function(blob) {
        // Sube el Blob a Firebase Storage
        const user = auth.currentUser;
        const uid = user.uid;
        const storageRef = ref(storage, '/userFoto/' + uid + '/foto.jpg');

        // Sube el Blob a Firebase Storage
        uploadBytes(storageRef, blob).then((snapshot) => {
            console.log('Imagen recortada subida a Firebase Storage');

            // Obtén la URL de descarga de la imagen recortada
            getDownloadURL(storageRef).then((url) => {
                // Actualiza el perfil del usuario con la nueva URL de la imagen recortada
                updateProfile(auth.currentUser, {
                    photoURL: url,
                }).then(() => {
                    console.log('Perfil de usuario actualizado con la nueva imagen recortada');
                }).catch((error) => {
                    console.error('Error al actualizar el perfil del usuario:', error);
                });
            }).catch((error) => {
                console.error('Error al obtener la URL de descarga de la imagen recortada:', error);
            });
        }).catch((error) => {
            console.error('Error al subir la imagen recortada a Firebase Storage:', error);
        });

        // Actualiza las imágenes después de subir la foto recortada
        const filemg = URL.createObjectURL(blob);
        img.src = filemg;
        imgg.src = filemg;

        // Resto del código...
        document.getElementById("box").style.display = "none";
        document.getElementById("vista").style.display = "block";

        setTimeout(function () {
            document.getElementById("box").style.display = "block";
        }, 1000 * 2);

        image.src = "";
        input.value = "";

        // Destruye el objeto Cropper
        cropper.destroy();

        // Ajusta las clases del modal para ocultarlo
        $('.modal').addClass('remove');
        $('.modal-content').addClass('remove');
        $('.modal').removeClass('active');
        $('.modal-content').removeClass('active');
    });
});
