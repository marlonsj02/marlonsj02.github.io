function operacaoAdicao() {
    document.getElementById('operacao').innerHTML = "+";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoSoma = parseFloat(number1) + parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoSoma;
}

function operacaoSubtracao() {
    document.getElementById('operacao').innerHTML = "-";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoSubtracao = parseFloat(number1) - parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoSubtracao;
}

function operacaoDivisao() {
    document.getElementById('operacao').innerHTML = "÷";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoDivisao = parseFloat(number1) / parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoDivisao;
}

function operacaoMultiplicacao() {
    document.getElementById('operacao').innerHTML = "X";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoMultiplicacao = parseFloat(number1) * parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoMultiplicacao;
}

function operacaoPotenciacao() {
    document.getElementById('operacao').innerHTML = "^";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoPotenciacao = parseFloat(number1) ** parseFloat(number2);

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoPotenciacao;
}

function operacaoRaiz() {
    document.getElementById('#1').style.display = "none";
    document.getElementById('#2').innerHTML = "#1"


    document.getElementById('operacao').innerHTML = "√";

    var number1 = document.getElementById("numberOne").value;
    var number2 = document.getElementById("numberTwo").value;

    var resultadoRaiz = Math.sqrt(parseFloat(number1)) || Math.sqrt(parseFloat(number2));

    document.getElementById("resultado").innerHTML = "Resultado = " + resultadoRaiz;
}