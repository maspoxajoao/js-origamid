/*
O metodo usado para adicionar um evento e o addEventListener
ele vai adicionar um função a este elemento, essa função e chamada
callback, uma função que ativa como resposta de algum evento.


const img = document.querySelector("img");

img.addEventListener("click", () => {
    console.log("Clicou");
});

console.log(img);


*/

/*
E recomendado a função do callback do addEventListener,
e uma boa pratica e ajuda a debugar pois mostra diretamente o nome da função
o contrario de uma função anonima

function callback() {
    console.log("clicou 2");
}

img.addEventListener("click", callback);

*/

/*
O primeiro parameto do callback e o evento que ocorreu

const animaisLista = document.querySelector(".animais-lista");
function executaCallback(event) {
    console.log(event);
    const currentTarget = event.currentTarget; // mostra o elemento ao qual o evento foi adicionado
    const target = event.target; // mostra o elemento que disparou o evento
    const type = event.type; // mostra o tipo do evento
    const path = event.path; // mostra o caminho do evento
    
    console.log(currentTarget, target, type, path);
}
animaisLista.addEventListener("click", executaCallback);

*/

/*

event.preventDefalut()  previne o comportamento padrão do evento,
por exemplo ir para uma pagina de link externo 
não e propriedade e um metodo

const linkExterno = document.querySelector('a[href^="#"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(event);
}

linkExterno.addEventListener("click", handleLinkExterno);


*/

/* 
em eventos this sera sempre referenceia ao elemento (o que esta na variavel)

const linkExterno = document.querySelector('a[href^="#"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(this); // e  a mesma coisa que o currentTarget
}

linkExterno.addEventListener("click", handleLinkExterno);
*/

const h1 = document.querySelector("h1");

function handleEvent(e) {
  console.log(e.type, e);
}

//h1.addEventListener("click", handleEvent);
//h1.addEventListener("mouseenter", handleEvent);
//h1.addEventListener("mousemove", handleEvent);

//window.addEventListener("scroll", handleEvent);
//window.addEventListener("resize", handleEvent);
//window.addEventListener("keydown", handleEvent);

function handleKeybord(e) {
  if (e.key === "f") {
    document.body.classList.toggle("azul");
    console.log(e.key);
  }
}
window.addEventListener("keydown", handleKeybord);

/* 
forEach e eventos
O metodo AddEventeListener e adicionado a um unico elemento em especifico
se for usar em uma lista, tera que ter um loop em uma lista 
para falar com os elementos unicos 
*/

const imgs = document.querySelectorAll("img");

function handleImg(e) {
  console.log(e.currentTarget.getAttribute("src"));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
