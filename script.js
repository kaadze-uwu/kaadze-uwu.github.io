// JAVASCRIPT BOTÓN MENÚ PARA MÓVILES EN LA LANDING PAGE
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
});

//JAVASCRIPT MODALES DE ENVÍO DE FORMULARIO CONTACTO.HTML

const formulario = document.querySelector(".formulario");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();
            const modal = document.getElementById("modal");
            const modalMensaje = document.getElementById("modal-mensaje");

            if (nombre && email && mensaje) {
                document.getElementById("modal-mensaje").innerHTML = "¡Tu formulario se ha enviado correctamente!";
            }

            modal.showModal();
        });
    }

function modalEnvioClose(){
    const modal = document.querySelector("#modal");
    modal.close();
}

// JAVASCRIPT CARRUSEL CON BOTONES PORTFOLIO TRABAJOS.HTML

const card = document.getElementById("card");
if (card) {
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

const tarjetas = [
    {
        imagen: "IMAGENES/foto_abogado.png",
        titulo: "Buffet de abogados El Seguro"
    },
    {
        imagen: "IMAGENES/fotografo.jpg",
        titulo: "Fotografías Abel"
    },
    {
        imagen: "IMAGENES/hamburguesa.jpg",
        titulo: "Hamburguesería Mumama Granada"
    },
    {
        imagen: "IMAGENES/imagen_floristeria.jpg",
        titulo: "Floristería Mariluz S.L"
    },
    {
        imagen: "IMAGENES/imagen_restaurante.jpg",
        titulo: "Restaurante El buen comer"
    },
];

let indiceActual = 0;

function mostrarTarjeta(indice) {
    const tarjeta = tarjetas[indice];
    card.innerHTML = `
        <div class="tarjeta">
            <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}">
            <h3>${tarjeta.titulo}</h3>
        </div>
    `;
}

anterior.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + tarjetas.length) % tarjetas.length;
    mostrarTarjeta(indiceActual);
});

siguiente.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % tarjetas.length;
    mostrarTarjeta(indiceActual);
});

setInterval(() => {
    indiceActual = (indiceActual + 1) % tarjetas.length;
    mostrarTarjeta(indiceActual);
}, 5000);

mostrarTarjeta(indiceActual);
  
}

// JAVASCRIPT CARRUSEL TESTIMONIOS INDEX.HTML

document.addEventListener("DOMContentLoaded", function () {
    const testimonios = [
        {
            texto: "Increíble trabajo, rápido y profesional. Lo recomiendo al 100%",
            autor: "- Marta"
        },
        {
            texto: "Mi sitio web quedó espectacular. Izan realizó justo lo que quería.",
            autor: "- Laura Martínez"
        },
        {
            texto: "Atención personalizada y mucha dedicación",
            autor: "- Pedro R."
        }
    ];

    let indiceTestimonio = 0;
    const testimonio = document.getElementById("carrusel-testimonios");

    function mostrarTestimonio(indice) {
        const te = testimonios[indice];
        testimonio.innerHTML = `
            <p class="texto-testimonio">"${te.texto}"</p>
            <p class="autor-testimonio">${te.autor}</p>
            <img src="IMAGENES/5_ESTRELLAS.webp" alt="Valoración de 5 estrellas" class="estrellas-testimonio">
        `;
    }

    mostrarTestimonio(indiceTestimonio);

    setInterval(() => {
        indiceTestimonio = (indiceTestimonio + 1) % testimonios.length;
        mostrarTestimonio(indiceTestimonio);
    }, 5000);
});
