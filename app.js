let numeroSecreto = gerarNumeroAleatorio(); //criamos a variavel numerosecreto e chamamos a função gerarnumerosecreto.
let tentativas = 1; //criamos a variavel tentativas = 1, para contar o numero de tentativas a partir de 1 tentativa.

function exibirTextoNaTela(tag, texto) { //criamos uma funcão, incluimos tag e o texto.
   let campo = document.querySelector(tag); //criamos uma variavel "campo"=document.querySelector, para buscar no index e tag
   campo.innerHTML = texto; 
}
exibirTextoNaTela('h1', 'Jogo do número secreto'); //estamos executando a função, utilizando a tag 'h1' e informamos  outro parametro, que é o 'texto' que vai ser exibido.
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');//estamos executando a função, utilizando a tag 'p' e informamos o texto.


function verificarChute (){ //criando a função de verificar o numero informado.
let chute = document.querySelector ('input').value; //criamos a variavel chute e colocamos o "input", que é a entrada do usuario. Depois do "input, colocamos o "value" 
// para pegar o valor dessa informação do campo. (== comparar um valor, = atribuir um valor)

    if (chute == numeroSecreto){ //vamos criar if para aparecer na tela. se o chute == numero secreto, o usario acertou.
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'; //criamos uma variavel da palavra "tentativa" e se tentativas for maior que 1. Valor se verdadeiro: 'Tentativas'.
        //  :'Tentativa' Valor se falso,ou seja, se tentativas for igual a 1.
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;//criamos outra variavel de mensagem para tentativas
        //com o texto, informando a variavel 'tentativas' e a palavra, 'tentaivas' ou 'tentativa'.

        document.getElementById('reiniciar').removeAttribute('disabled'); //dentro do if queremos que ele puxe o botão reiniciar. puxamos o botão reiniciar e removendo o atributo 'disabled'
        //que está no html.

        exibirTextoNaTela('h1','Acertou!'); //colocamos a função exibirtextonatela, com h1 e a mensagem acertou.
        exibirTextoNaTela('p', mensagemTentativas);//colocamos a função exibirtextonatela, com p e a mensagem.
    } else { //se o usuario errar o numero.
        if(chute > numeroSecreto){ //se o chute for maior que o numero secreto
            exibirTextoNaTela ('p', 'O número secreto é menor'); //função exibirtexto p e o texto que queremos informar
        } else { //senão
            exibirTextoNaTela ('p', 'O número secreto é maior'); //função exibirtexto 'p' e o numero é maior.
        }
        tentativas ++; //instrução feita para contar a quantidade de tentatvias o usuario fez.
        limparCampo ();
    }
} 
function gerarNumeroAleatorio() { //criamos a função gerarnumeroaleatorio
    return parseInt(Math.random() *100 +1 );  //utilizamos o return para retornar o numero secreto gerado. parseint para transformar o numero inteiro e o math.random para gerar um numero aleatorio.
}

//função para limpar campo
function limparCampo () {
chute = document.querySelector('input'); //chute = ao document.query ('input'), que é o campo.
chute.value = ''; //chute.value (valor) uma string vazia
}

function reiniciarJogo () { //criando função para o novo jogo
    numeroSecreto = gerarNumeroAleatorio (); //puxamos o numero secreto, para gerar um numero aleatorio.
    limparCampo (); //o campo será limpado
    tentativas = 1; // numero de tentativas.
    exibirMensagem (); // puxamos a função de mensagem na tela
    document.getElementById ('reiniciar').setAttribute ('disabled', true); // utilizamos o botão 'novo jogo' apenas quando o usuario acertar.
}

function exibirMensagem () { //criamos a função que exibe mensagem na tela
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100');
}


