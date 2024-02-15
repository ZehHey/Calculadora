var lista = []

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const isEnter = (key === 'Enter' || event.code === 'Enter');
    const isBackspace = (key === 'Backspace' || event.code === 'Backspace');
    const isEsc = (key === 'Escape' || event.code === 'Escape')
    const isPorcento = (key === '%' || (key === '5' && event.shiftKey));
    if (/[0-9+\-*/.=]/.test(key) || isEnter || isBackspace || isEsc || isPorcento) {
        event.preventDefault();
        if (key === 'Enter') {
            igual();
        } else if (key === 'Backspace') {
            event.preventDefault();
            apagar();
        }else if(key === 'Escape'){
            event.preventDefault();
            ac();
        }else if(key ==='%'){
            event.preventDefault();
            porcento()
        }else{
            add(key);
        }
    }
});

function add(num){
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num
}

function ac(){
    document.getElementById('res').innerHTML = ''
}

function apagar() {
    var tela = document.getElementById('res');
    var conteudoAtual = tela.innerHTML;
    tela.innerHTML = conteudoAtual.substring(0, conteudoAtual.length - 1);
}

var adicionaAbertura = true;
function parenteses() {
    var tela = document.getElementById('res');
    
    if (adicionaAbertura) {
        tela.innerHTML += '(';
    } else {
        tela.innerHTML += ')';
    }
    
    adicionaAbertura = !adicionaAbertura;
}
function porcento(){
    var tela = document.getElementById('res');
    var conteudoAtual = tela.innerHTML
    conteudoAtual = conteudoAtual.replace('%','')
    var resultado = eval(conteudoAtual)/100
    tela.innerHTML = resultado

}
function igual(){
    var tela = document.getElementById('res')
    if(tela){
        var expressão = tela.innerHTML
        
        var resultado = eval(expressão)
        
        resultado = parseFloat(resultado.toFixed(4))
        tela.innerHTML = resultado
        
    } else{
        document.getElementById('res').innerHTML = ''
    }
}