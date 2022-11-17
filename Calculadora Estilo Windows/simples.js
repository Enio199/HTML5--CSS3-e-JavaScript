var currentOperations = window.document.querySelector('#current-operations')
var button = window.document.querySelector('.number')
var delet = window.document.querySelector('#delet')
var ultimo = document.querySelector('#ultimo')
var igual = document.querySelector('#equal-btn')

// Eventos dentro dos botões seletivos
delet.addEventListener('click', del)
ultimo.addEventListener('click', utl)
igual.addEventListener('click', ig)

// ----------------------------------------

function inserir(num) {
    currentOperations.innerHTML += num
}

// função pra deletar

function del() {
    currentOperations.innerHTML = ''
}

// função pra apagar o último valor

function utl() {
    var ult = currentOperations.innerHTML
    currentOperations.innerHTML = ult.substring(0, ult.length -1)
}

//Função para calcular os valores

function ig() {
    var ult = currentOperations.innerHTML
    if(ult) {
        currentOperations.innerHTML = eval(ult)
    }
}