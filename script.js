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
