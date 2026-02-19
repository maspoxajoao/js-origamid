const href = window.location.href;

console.log(href);

const h1Selecionado = document.querySelector("h1");

h1Selecionado.addEventListener("click", () => {
  console.log("clicou em");
});
