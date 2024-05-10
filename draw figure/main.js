let widthInput = document.getElementById("widthnumber")
let heigthInput = document.getElementById("heigthnumber")
let radiusInput = document.getElementById("border-radius")
let colorInput = document.getElementById("color")
let result = document.getElementById("res")
let button = document.getElementById("form-maker")

function box(event) {
    event.preventDefault()
    let width = widthInput.value + "px"
    let height = heigthInput.value + "px"
    let border = radiusInput.value + "px"
    let color = colorInput.value

    result.style.width = width
    result.style.height = height
    result.style.borderRadius = border
    result.style.backgroundColor = color
}

button.addEventListener("submit", box)