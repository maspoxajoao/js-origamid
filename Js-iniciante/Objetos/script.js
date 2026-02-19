let pessoa = { nome: "João", idade: 27 };

let quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco()); // executando  função

let menu = {
  width: 800,
  heigth: 50,
  backgroundColor: "#84E",
  metadeHeigth() {
    this.heigth / 2;
  },
  /*se fora do objeto tiver uma variavel  com o mesmo nome e outro valor vai dividir o valor de fora da variavel se nao usar o this.*/
};
menu.backgroundColor = "#000";

//adiciona propriedades e metodos a objetos, se a propriedadee ja existir ele bai substituir o anterior
menu.color = "blue";
menu.esconder = function () {
  console.log("escondi");
};

var bg = menu.backgroundColor;
console.log(pessoa.nome.length);
