let listaDeNumerosSorteados = [];
let numeroLimite = 15;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p",`Escolha um número de 1 e ${numeroLimite}:`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1","Acertou!");
        let palavraTentativas = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        limparCampo("input");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if(chute > numeroSecreto){
        console.log(chute);
        exibirTextoNaTela("p",`O número é menor do que ${chute}`);
        tentativas++;
        limparCampo("input");
    }else{
        console.log(chute);
        exibirTextoNaTela("p",`O número é maior do que ${chute}`);
        tentativas++;
        limparCampo("input");
    }
}

function gerarUmNumeroAleatorio(){
    console.log(numeroLimite);
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;
    
    if(quantidadeDeNumerosEscolhidos == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarUmNumeroAleatorio();
    }
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido; 
}

function limparCampo(nomeDoCampo){
    if(nomeDoCampo === "input"){
        let campo = document.querySelector(nomeDoCampo);
        campo.value = "";        
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo("input");
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled","disabled");
}











/**Desafios aula-04 */
/*
let listaGenerica = [];
let linguagensDeProgramacao = ["Javascript","C","C++","Kotlin","Python"];
console.log(linguagensDeProgramacao);

linguagensDeProgramacao.push("Java");
linguagensDeProgramacao.push("Ruby");
linguagensDeProgramacao.push("GoLang");
console.log(linguagensDeProgramacao);

let frutas = ["banana", "maçã", "pera"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[frutas.length-1]);
*/


/**Desafios aula 03 */

/*function calculaarIMC(altura, peso){
    let imc = (peso/(altura*altura));
    if(imc<20){
        console.log("Você está a baixo do peso.")
    }else if(imc>=20 && imc<=25){
        console.log("Você está num peso ideal");
    }else{
        console.log("Você está acima do peso ideal."+ imc);
    }
}

calculaarIMC(1.79,90);

function fatorial(numero){
    let contador = 1;
    let fatorial= 1;
    while(contador<=numero){
        fatorial = fatorial*contador;
        contador++;
    }
    return fatorial;
}
console.log(fatorial(6));

function dollarToReal(valorDollar){
    let valorReais = valorDollar*4.80;
    return valorReais;
}

console.log(dollarToReal(5));

function exibirAreaEPerímetro(altura, largura){
    let area = altura* largura;
    let perimetro = 2*altura + 2*largura;

    console.log(`A área é: ${area} e o perímetro é: ${perimetro}`);
}

exibirAreaEPerímetro(10,7);

function exibirAreaEPerímetroCircular(raio){
    let PI = 3.14;
    let area = PI*raio*raio;
    let perimetro = 2*PI*raio;

    console.log(`A área é: ${area} e o perímetro é: ${perimetro}`);
}

exibirAreaEPerímetroCircular(3.5);

function exibirTabuada(numero){
    for(let i=1; i<11;i++){
        console.log(`${numero} X ${i} = ${numero*i}`);
    }
}

exibirTabuada(9);
*/



/**Desafios aula 02 */

/*function saudacao(){
    console.log("Olá Mundo!");
}

saudacao();

function dobrarNumero(numero){
    return 2*numero;
}
console.log("dobrar número 2: "+ dobrarNumero(2))

function media(valor1,valor2,valor3){
    return ((valor1+valor2+valor3)/3);
}
console.log("média de 3,5,7: "+ media(3,5,7));

function maiorNumero(numero1,numero2){
    if(numero1>numero2){
        return numero1;
    }
    return numero2;
}
console.log("Maior número 10 ou 20: "+ maiorNumero(10,20));

function quadradoDoNumero(numero){
    return numero*numero;
}
console.log("Quadrado do número 6: "+ quadradoDoNumero(6));
*/
