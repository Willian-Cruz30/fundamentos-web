/*Case Sensitive = reconhecer letras maiuscula e minuscula.
por tag: getElementByTagName()
por id: getElementByID()
por Nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
 */ 


let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assusnto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')
nome.style.width = "100%"
email.style.width = "100%"

function validarNome(){

    if (nome.value.legth <2 ){
        let txt = document.querySelector('#txtNome')
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
        nomeOK = true
    }
    
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    }else{
        txt.innerHTML = 'E-mail Válido'
        txt.style.color = 'green'
        emailOK = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (asssunto.value.legth>=100){
        txtAssunto.innerHTML = 'Texto excedeu o limite de caracteres digite no maximo 100 caracteres'
        txtAssunto.style.Color ='red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOK == true && emailOK == true && assuntoOK == true){
        alert ('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente')
    }
}

function mapaZomm(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}