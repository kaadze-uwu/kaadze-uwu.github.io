const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
});

function modalEnvioOpen(){
    const modal = document.querySelector("#modal");
    modal.showModal();
}

function modalEnvioClose(){
    const modal = document.querySelector("#modal");
    modal.close();
}

const contenedor = document.getElementById("card");
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
    contenedor.innerHTML = `
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
