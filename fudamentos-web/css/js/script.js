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
    }
}

