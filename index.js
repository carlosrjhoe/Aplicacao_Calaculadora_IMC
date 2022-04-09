// Variavel global
const calcular = document.getElementById('calcular');

function imc(){
    // Pegar os valores do index digitados nos seus respectivos campos
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){
        // Validação
        let valorIMC = (peso / Math.pow(altura,2)).toFixed(2);

        // Classificação
        let classificacao = "";
        if(valorIMC < 18.5){
            classificacao = resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está a baixo do peso.`;
        } else if (valorIMC > 18.5 && valorIMC < 25){
            classificacao = resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está no seu peso ideal`;
        } else if (valorIMC > 25 && valorIMC < 30){
            classificacao = resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está com sobrepeso`;
        } else {
            classificacao = resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está com obesidade`
        }
    } else {
        resultado.textContent = "Prencha todos os campos!"
    }
}

calcular.addEventListener("click", imc);