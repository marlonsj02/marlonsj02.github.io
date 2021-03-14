// OPERAÇÕES MATEMÁTICAS

// ADIÇÃO
function operacaoAdicao() {
    document.getElementById('operacao').innerHTML = "+";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoSoma = parseFloat(number1) + parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoSoma;
}

// SUBTRAÇÃO
function operacaoSubtracao() {
    document.getElementById('operacao').innerHTML = "-";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoSubtracao = parseFloat(number1) - parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoSubtracao;
}

// DIVISÃO 
function operacaoDivisao() {
    document.getElementById('operacao').innerHTML = "/";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoDivisao = parseFloat(number1) / parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoDivisao;
}

// MULTIPLICAÇÃO 
function operacaoMultiplicacao()
document.getElementById('operacao').innerHTML = "X"; {
    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoMultiplicacao = parseFloat(number1) * parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoMultiplicacao;
}

// POTENCIAÇÃO
function operacaoPotenciacao() {
    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoPotenciacao = parseFloat(number1) ** parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoPotenciacao;
}

// RAIZ QUADRADA 
function operacaoRaiz() {
    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoRaiz = Math.sqrt(parseFloat(number1));

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoRaiz;
}