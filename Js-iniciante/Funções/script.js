function areaQuadrada(lado) {
  return lado * lado;
}

//console.log(areaQuadrada(4));

function pi() {
  return 3.14;
}

var total = 5 * pi();

//console.log(total);

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

//console.log(imc(70, 1.77));

function corFavorita(cor) {
  if (cor === "azul") {
    return "voce gosta do ceu";
  } else if (cor === "verde") {
    return "voce gosta de mato";
  } else {
    return "voce nao gosta de cores";
  }
}

addEventListener("click", function () {
  // console.log("oi");
});

function calcImc(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

//calcImc(80, 1.75);

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== "number") {
    return "a idade nao e um numero";
  }
  return idade <= 60; // retorna true para  -60 ou false para +60
}

//console.log(terceiraIdade(61));

function faltaVisitar(paisesVisitados) {
  let totalPaises = 193; // Variaveis so são visiveis dentro do escopo declarado
  return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}

//funções delcadas dentro de outras funções so são visivies dentro do escopo pai dela.
//todos os dados so sao vistos dentro do escopo pai declarado

let profissao = "programador";

function dados() {
  let nome = "João";
  var idade = 27;

  function outrosDados() {
    endereco = "Belo Horizonte";
    idade = 28;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }

  return outrosDados();
}

console.log(dados());
