var btn = document.querySelector('#btn')
var cont = 0

//pegando valores dos select

btn.addEventListener('click', function (event) {
    event.preventDefault()
    cont++
    var sex = document.getElementsByName('sex')
    var gen = ''

    if(sex[0].checked) {
        gen = 'Masculino'
    }
    
    else {
         if(sex[1].checked) {
            gen = 'Feminino'
        }
    }
    

    var select = document.querySelector('#sele')
    var estado = select.options[select.selectedIndex].text
    var estadoValue = select.options[select.selectedIndex].value

    var primeiroForm = document.querySelector('#primeiroForm')

    //Setando o valor que está dentro do elemento nome

    console.log(primeiroForm.nome.value)
    console.log(primeiroForm.email.value)
    console.log(primeiroForm.Data.value)
    console.log(primeiroForm.hist.value)
    console.log(estado)
    console.log(gen)

    // verificação das informações

    var verifique = document.querySelector('.verifique')

    let titulo = document.createElement('h1')
    let conf = document.createElement('p')
    let conf1 = document.createElement('h3') 
    let para = document.createElement('h3')

    //Criando botão de confirmação

    var button1 = document.createElement('button')
    var button2 = document.createElement('button')

    var lbl = document.createTextNode('Sim')
    var lbl2 = document.createTextNode('Corrigir') 

    button1.appendChild(lbl)
    button2.appendChild(lbl2)

    //criando função do botão sim/não

    para.innerText = 'Parabéns! Os dado foram salvos com sucesso.'
    titulo.innerHTML = 'Confira as informações abaixo:'
    conf.innerText = `nome: ${primeiroForm.nome.value}\n email: ${primeiroForm.email.value}\n Nascimento: ${primeiroForm.Data.value}\nEstado: ${estado} - ${estadoValue}\nSexo: ${gen}\n Recomendação: ${primeiroForm.hist.value}`
    conf1.innerText = 'As informações acima estão corretas?'

    if(cont <= 1) {
        verifique.appendChild(titulo)
        verifique.appendChild(conf)
        verifique.appendChild(conf1)
        verifique.appendChild(button1)
        verifique.appendChild(button2)
    } 
    
    else {
        if(cont > 1 ) {
            let v = event.target.innerText
            alert(`Você ja clicou em ${v}\nClique em sim ou Corrigir para continuar`)
        }
    }

    // criando os metodos de confirmação

    button1.addEventListener('click', function(e) {
        const value = e.target.innerHTML

        if(value == 'Sim') {
            verifique.appendChild(para)
        }
        else {
            document.location.reload(true)
        }
    })
    button2.addEventListener('click', function(e) {
        const value = e.target.innerHTML

        if(value == 'Corrigir') {
            
            document.location.reload(true)
        }
    })
})