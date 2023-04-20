
let x = 10
console.log(x)

console.log(`joao tem  ${50*100}`)

// definir uma funcao para atualizar o html mesmo... aqui usar pra uma div????
// function change_text(id_tag, text) {
    //     const element = document.querySelector(id_tag)
    //     console.log(element)
    //     // element.textContent= text 
    // }   
// change_text("#div1","oie")
    
    
// selecionar varios elementos e iterar neles
const doishs = document.querySelectorAll("h3")
console.log("h3:")
doishs.forEach(element => {
    console.log(element)
});


// texto normal 
const element = document.querySelector("#ok")

console.log(element)

element.textContent = "mudei"
element.innerHTML = "mudei <h1>MUDEI<h1/> "


// input - value
element2 = document.querySelector("input")

console.log(element2)
console.log(element2.value)

element2.value = "oiie"
console.log(element2.value)

// adicionar atributos como Id aos elementos. Podemos mexer com qualquer tipo de atributo

const headerToId = document.querySelector("header")

headerToId.setAttribute("id", "headerId")

const headerId = document.querySelector("#headerId")

console.log(headerId)

    //headerId.removeAttribute("id")

console.log(headerId.getAttribute("class"))

// mexer no style

const estiloP = document.querySelector(".estilo")

console.log(estiloP.textContent)
estiloP.style.backgroundColor = "#blue"

    // usar no body
    
const body = document.querySelector("body")
body.style.backgroundColor = "#f9f3d2"


// lista de classes (lembrando classes em CSS sao . e ids são #)
    // aqui podemos atribuir as classes e ids do css na tag

    //podemos fazer com body.setAttribute("class","active")

colorChange = document.querySelector("#colorChange")

    // pegamos uma lista de classes 
console.log(colorChange.classList)

colorChange.classList.add('active', 'green')
colorChange.classList.remove('active')
    // switch -> se não tiver o active adiciona o contrario remove 
colorChange.classList.toggle('active')


// navegar pelos elementos pais

const lista1 = document.querySelector("#elemento1")

console.log(lista1.parentNode)

// navegar pelos elementos filhos

const elemento_div1 = document.querySelector("#div1")

    // aqui os texts sao os espaços
console.log(elemento_div1.childNodes)
console.log(elemento_div1.firstChild) //last tambem
    // elimina os espaços text
console.log(elemento_div1.children)
console.log(elemento_div1.firstElementChild) //aqui pode ser last também

// navegar pelos irmaos 
    // aqui pegamos o elemento primeiro filho  
const elemento_h1 = elemento_div1.firstElementChild
    // aqui pegamos o elemento irmão  
console.log(elemento_h1.nextElementSibling) //aqui pode ser last também


// aqui vamos inserir

    //jeito diferente de inserir  
const div_mestra = document.querySelector("#inserir")
const elemento_inserir_antes = document.querySelector("#inserir p")
console.log(elemento_inserir_antes)

//criar o elemento
const p_criada = document.createElement('p')
p_criada.innerText = "Aqui eu fui inserido"

div_mestra.insertBefore(p_criada, elemento_inserir_antes)