let number = 0

let titulo = document.getElementById ("titulo")
let botao = document.getElementById ("botao")
let botaomenos = document.getElementById ("botaomenos")


botao.addEventListener("click", () => { 
    number++
    titulo.innerText =  number 
} )

botaomenos.addEventListener("click", () => { 
    number--
    titulo.innerText =  number 
} )
 console.log (number)
