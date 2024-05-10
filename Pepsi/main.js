let original = document.getElementById("type-1")
let dietic = document.getElementById("type-2")
let noCugar = document.getElementById("type-3")
let bodyBgColor = document.getElementById("body")
let btn = document.getElementById("btn")
let navBar = document.getElementById("navbar")
let mainLogo = document.getElementById("main-logo")


original.addEventListener("click", () => {
    event.preventDefault()
    bodyBgColor.style.backgroundColor = "#015794"
    btn.style.color = "#015794"
    mainLogo.src = "picts/pepsi001.png"
})

dietic.addEventListener("click", () => {
    event.preventDefault()
    bodyBgColor.style.backgroundColor = "gray"
    btn.style.color = "gray"
    mainLogo.src = "picts/pepsi002.png"
})

noCugar.addEventListener("click", () => {
    event.preventDefault()
    bodyBgColor.style.backgroundColor = "black"
    btn.style.color = "black"
    mainLogo.src = "picts/pepsi003.png"
})