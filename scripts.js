const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "40%"
    form.style.left.transform = "translateX(-50)"
    mascara.style.visibility = "visible"
}

/* Melhor maneira de fazer */

function esconderForm() {
    form.style.left = "-300px"
    form.style.left.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

/* function cliqueiNaMascara() { segunda maneira de fazer
    location.reload()
}*/

