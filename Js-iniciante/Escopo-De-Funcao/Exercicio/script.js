// Por qual motivo o código abaixo retorna com erros?
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas); //subindo o log para dentro do bloco e mudnado var por cor
}

// Como corrigir o erro abaixo?
const dois = 2; // tirar a variavel do escopo
function somarDois(x) {
  return x + 2;
}

function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 50;
for (let numero = 0; numero < 10; numero++) {
  //trocar var por let
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
