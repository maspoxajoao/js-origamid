const menu = document.querySelector(".menu");

menu.classList.add("Ativo"); //adiciona a classe ativo
menu.classList.remove("azul"); //remove a classe azul
menu.classList.toggle("azul"); //se tiver a classe azul, remove. Se não tiver, adiciona.

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-a-classe-azul");
} else {
  menu.classList.add("NAO-possui-a-classe-azul");
}
//console.log(menu.className); //retorna uma string com os nomes das classes
//console.log(menu.classList[1]);

//attributes
// ele retorna um array-like com atributos do elemento
const animais = document.querySelector(".animais");
//console.log(animais.attributes.class); //retorna o atributo class do elemento
//console.log(animais.attributes.id); //retorna o atributo id do elemento
//console.log(animais.attributes["data-texto"]); //retorna o atributo data-texto do elemento

//getAttribute e setAttribute
//São metodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector("img");
const srcImg = img.getAttribute("src"); //pega o valor do atributo src
console.log(srcImg);

img.setAttribute("alt", "É uma raposa"); //define o valor do atributo alt
const possuiAlt = img.hasAttribute("alt"); //verifica se o elemento possui o atributo alt
console.log(possuiAlt);

//Propriedades Read-Only vs Writable
// Algumas propriedades são somente leitura (read-only) e outras podem ser alteradas (writable)

