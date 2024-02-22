var historico = [];
var modoNoturno = false;

function inserir(num) {
    var resultado = document.getElementById('resultado');
    if (resultado.innerHTML === "Operação inválida!") {
        resultado.innerHTML = "";
    }
    resultado.innerHTML += num;
}

function limpartudo() {
    document.getElementById('resultado').innerHTML = "";
    
}

function voltar() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        var resultadoFinal = eval(resultado);
        document.getElementById('resultado').innerHTML = resultadoFinal;
        historico.push(resultado + ' = ' + resultadoFinal);
        document.getElementById('historico').innerHTML = historico.join('<br>');
    } else {
        document.getElementById('resultado').innerHTML = "Operação inválida!";
    }
}

function alternarTema() {
    var botaoTema = document.getElementById('modo-tema');
    
    if (modoNoturno) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        botaoTema.textContent = 'Modo Noturno🌑';
        modoNoturno = false;
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        botaoTema.textContent = 'Modo Diurno🌕';
        modoNoturno = true;
    }
}
