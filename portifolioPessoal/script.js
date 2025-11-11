console.log("teste")

let telefone = "5527998465172"

let nome = document.getElementById("form-nome")
let assunto = document.getElementById("form-assunto")
let descricao = document.getElementById("from-descriçao")
let botao = document.getElementById("form-botao")

botao.addEventListener("click", () => {
    let mensagem = "ola, meu nome é " + nome.value + ", gostaria de falar sobre " + assunto.value + "./n/n" + descricao.value
    mensagem = encodeURIComponent(mensagem)

    let whatsapp = "https://api.whatsapp.com/send?phone=" + telefone + "&text" + mensagem

    console.log(whatsapp)
    window.open(whatsapp, "_blank")
})
