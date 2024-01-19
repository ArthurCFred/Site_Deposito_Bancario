const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = 'Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>';

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        const containermensagemSucesso - document.querySelector('.success-message');
        const containermensagemSucesso.innerHTML - mensagemSucesso;
        const containerMensagemSucesso.style.display - 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border - '1px solid red';
        document.querySelector('.error-message').style.display - 'block';
    }
})

console.log(form);


    /* Quando adicionar let formEValido = false muda a estrutura
    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    if (!validaNome(nomeBeneficiario.value)) { // ou assim === false ), ao inves do ! como negacao
        alert("O nome nao esta completo");
    } else {
        alert("Tudo certo")
    }*/