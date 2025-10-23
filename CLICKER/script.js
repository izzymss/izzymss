let botao = document.getElementById ("botao")
let texto = document.getElementById ("texto")
 
let numero = 0 

botao.addEventListener ("click", () => {
    numero ++
    texto.innerText = numero
})