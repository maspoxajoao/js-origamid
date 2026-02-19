// Retorne o url da página atual utilizando o objeto window
const href = location.href;
console.log(href);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classeAtiva = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const linguaguem = window.navigator.languages;
console.log(linguaguem);

// Retorne a largura da janela
const width = window.innerWidth;
console.log(width);
