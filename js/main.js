const menu = document.getElementById("menu")
const hamburger = document.querySelectorAll(".hamburger-menu")
const nav = document.querySelector(".nav")
const onOff = document.querySelector(".on-off")
const musicalLyrics = document.querySelector(".musical-lyrics")
const inputSun = document.querySelector(".sun")
const inputMoon = document.querySelector(".moon")
const switchMode = document.querySelector(".switch")
const body = document.querySelector("body")
const overlay = document.querySelector(".body-overlay")

menu.addEventListener("click", ()=> {
    hamburger[0].classList.toggle("top")
    hamburger[1].classList.toggle("middle")
    hamburger[2].classList.toggle("botton")
    nav.classList.toggle("nav-hidden")
    overlay.classList.toggle("body-overlay-show")
})

onOff.addEventListener("click", ()=> {
    if(onOff.textContent == "off") {
        onOff.textContent = "on"
        musicalLyrics.classList.add("musical-lyrics-active")//Transicion a la letra musical
        setTimeout(() => {
            re()
        }, 250);
    }else{
        onOff.textContent = "off"
    }
})

inputMoon.addEventListener("click", ()=> {
    if(inputMoon.checked == true)
    inputMoon.hidden = true
    inputSun.hidden = false
    body.classList.add("dark")
    switchMode.classList.add("switch-dark")
})

inputSun.addEventListener("click", ()=> {
    if(inputSun.checked == true)
    inputSun.hidden = true
    inputMoon.hidden = false
    body.classList.remove("dark")
    switchMode.classList.remove("switch-dark")
})

//Funcion que interviene en el proceso de cambio de tamaño de la letra musical
const re = ()=> {
    musicalLyrics.classList.remove("musical-lyrics-active")
}
