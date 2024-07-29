function CriarConta(){
    let emailConta = document.getElementById("email").value
    let senhaConta = document.getElementById("senha").value
    let nomeConta = document.getElementById("nome").value
    let generoPessoa = document.querySelector("input[name=genero]:checked").value
    let dataNascimento = document.getElementById("nascimento").value

    let termosUso = document.getElementById("VcAceita")

    if(termosUso.checked){
    alert('O email dessa conta é: '+emailConta+'\nA senha dessa conta é: '+senhaConta+'\nVocê prefere ser chamado(a) de: '+nomeConta+'\nVocê se identifica com o seguinte gênero: '+generoPessoa+'\nVocê nasceu em: '+dataNascimento)

    window.location.href = "/Conta_Criada/conta_criada.html"
}else{
    alert('Para criar a conta você precisa aceitar os "Termos e Condições de Uso do Spotify" e a "Política de Privacidade"')
}
}

function Voltar(){
    window.location.href = "/Formulario-Criar_Conta/formulario.html"
}