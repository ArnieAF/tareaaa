const btnContraste = document.getElementById("btn-contraste");
const btnFuente = document.getElementById("btn-fuente");
const texto = document.getElementById("texto");
const mensajes = document.getElementById("mensajes");

let contrasteActivo = false;
let tamañoFuente = 16; // tamaño inicial en píxeles

btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    contrasteActivo = !contrasteActivo;

    mensajes.textContent = contrasteActivo 
        ? "Alto contraste activado" 
        : "Alto contraste desactivado";
});

btnFuente.addEventListener("click", () => {
    tamañoFuente += 2;
    texto.style.fontSize = tamañoFuente + "px";
    mensajes.textContent = `Tamaño de fuente aumentado a ${tamañoFuente} píxeles.`;
});
