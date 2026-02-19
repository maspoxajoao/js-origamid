/*
const section = document.querySelector(".animais");

section.clientHeight // height + padding
section.offsetHeight // height + padding + border
section.scrollHeight // height total, mesmo dentro de scroll   
*/

const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight; // serve tbm para width é a mesma coisa, um largura outro altura

//para pegar distancia do topo do elemento para o topo da pagina

const animaisTopo = listaAnimais.offsetTop;

console.log(animaisTopo);

const raposah2 = document.querySelector("h2");

const primeiroH2 = raposah2.offsetLeft;

console.log(primeiroH2);

//metodo para retornar um objeto com valores de width height e outros valores

const rect = raposah2.getBoundingClientRect();

console.log(rect); // retorna um objeto

//metodo que retorna tamanho da janela
console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset, //retorna o quanto de scroll foi feito
);

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("usuario mobile");
} else {
  console.log("usuario descktop");
}
