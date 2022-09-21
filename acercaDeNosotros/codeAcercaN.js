window.onscroll = function(){miFunction()};

let imagenUno = document.getElementById("imagenUno")
let imagenDos = document.getElementById("imagenDos")
let imagenTres = document.getElementById("imagenTres")
let imagenCuatro = document.getElementById("imagenCuatro")
let contenedorsecundario = document.getElementById("contenedorEfecto")

let distancia_imagenUno, distancia_imagenDos, distancia_imagenTres, distancia_imagenCuatro, distancia_contenedorsecundario;

function miFunction(){
    distancia_imagenUno = window.innerHeight - imagenUno.getBoundingClientRect().top;
    if (distancia_imagenUno >= 200){
        imagenUno.classList.add("efecto-imagenUno");
    }

    distancia_imagenDos = window.innerHeight - imagenDos.getBoundingClientRect().top;
    if (distancia_imagenDos >= 200){
        imagenDos.classList.add("efecto-imagenDos");
    }

    distancia_imagenTres = window.innerHeight - imagenTres.getBoundingClientRect().top;
    if (distancia_imagenTres >= 200){
        imagenTres.classList.add("efecto-imagenTres");
    }

    distancia_imagenCuatro = window.innerHeight - imagenCuatro.getBoundingClientRect().top;
    if (distancia_imagenCuatro >= 200){
        imagenCuatro.classList.add("efecto-imagenCuatro");
    }

    distancia_contenedorsecundario = window.innerHeight - contenedorsecundario.getBoundingClientRect().top;
    if (distancia_contenedorsecundario >= 200) {
        contenedorsecundario.classList.add("efecto-contenedor")
    }
}