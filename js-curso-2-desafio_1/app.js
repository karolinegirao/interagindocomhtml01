let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

function verificarConsole(){
    console.log('O botão foi clicado!')
}

function verificarAlert(){
    console.log('Eu amo JS!');
}

function verificarPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    if(cidade){
        alert('Estive em ' + cidade + ' e lembrei de você.');
    } else {
        alert('Você não digitou o nome de uma cidade');
    }

}
// Função para o botão "Soma"
function calcularSoma() {
    // Pede ao usuário o primeiro número
    let num1 = parseInt(prompt('Digite o primeiro número inteiro:'), 10);
    
    // Pede ao usuário o segundo número
    let num2 = parseInt(prompt('Digite o segundo número inteiro:'), 10);

    // Verifica se os valores são números válidos
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calcula a soma
        let soma = num1 + num2;
        // Exibe o resultado em um alerta
        alert('A soma dos números é: ' + soma);
    } else {
        // Exibe um alerta se qualquer um dos valores não for um número
        alert('Por favor, digite números inteiros válidos.');
    }
}

