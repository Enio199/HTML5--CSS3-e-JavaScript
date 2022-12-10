const main = document.querySelector('main')
const btn = document.querySelector('button')
const foo = document.querySelector('footer')
var h = document.querySelector('h2')

var branco = 'Light Mode ON'
var preto = 'Dark-Moder ON'

btn.addEventListener('click', chengerModer)


function chengerModer() {
    ChangerClass()
    ChangerText()
}


function ChangerClass() {
    main.classList.toggle('DarkMode')
    btn.classList.toggle('DarkMode')
    foo.classList.toggle('DarkMode')
}

function ChangerText() {

    if (btn.innerText == branco) {
        
        btn.innerText = preto
        h.innerText = preto
    }else {
        btn.innerText = branco
        h.innerText = branco
    }
}