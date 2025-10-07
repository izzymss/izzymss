let number = 3 
let nome = "izzy"

let titulo = document.getElementById ("titulo")

let botao = document.getElementById ("botao")


botao.addEventListener("click", () => { 
    number++
    titulo.innerText =  number 
} )
