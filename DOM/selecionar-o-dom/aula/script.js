const animais = document.getElementById("animais");

const gridSection = document.getElementsByClassName("grid-section");

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno);
// ^ significa que o valor do href começa com #

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);
/*
// retorna node list e diferente do HTML collection esse
// valor e estatico, se atualizar o DOM ele sempre sera
// o valor inicial
*/
const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach((i, index) => {
  console.log(i);
});

/*
A diferença de HTML collection e nodeList

A HTMLcollection Atualiza automaticamente ele é ao vivo

A nodeList nao atualiza, ela e estatica


ambas são Array-Like
*/

//transforamdno Array-Like em Array
const arrayGrid = Array.from(gridSectionHTML);
//remove e retornar o ultimo
console.log(arrayGrid.pop());

arrayGrid.forEach((e, i) => {
  console.log(i);
});
