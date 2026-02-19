const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  // o primerio parametro e o item = img
  // o segundo e o index = a posição do item no array
  // e o proprio array para ser utilizado de forma isolada
  //console.log(item, index);
});

//transforamando um array-like em array
const titulos = document.getElementsByClassName("titulo");
console.log(titulos);

const titulosArray = Array.from(titulos);
console.log(titulosArray);

titulosArray.forEach((x, i) => console.log(x, i));
