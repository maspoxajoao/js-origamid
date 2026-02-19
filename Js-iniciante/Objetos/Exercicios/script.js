// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dados = { nome: "João", sobrenome: "Victor", idade: 27 };
console.log(dados);

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(dados.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
let carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
console.log(carro.preco);

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  cor: "preto",
  idade: 10,
  raça: "labrador",
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latir";
    }
    return "nada";
  },
};
