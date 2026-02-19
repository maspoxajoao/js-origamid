let possuiGraducao = false;
let possuiDoutorado = true;

if (possuiGraducao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("tem doutorado");
}

if (!possuiGraducao) {
  console.log("É falso");
}

let nome = "Joao";

if (nome) {
  console.log(nome);
}

if (!nome) {
  console.log("nome vazio");
}

if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log(" falso");
}

var condicional = 5 - 5 || 5 + 5 || 10 - 2;

console.log(condicional);

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let idade1 = 10;
let idade2 = 15;

if (idade1 > idade2) {
  console.log(idade1);
} else if (idade1 === idade2) {
  console.log("a idade e igual");
} else {
  console.log(idade2);
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
let nomeEx = "joao";
var idade = 28;
var possuiDoutorados = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nomeEx,
  !!idade,
  !!possuiDoutorados,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("brasil tem mais habitantes");
} else {
  console.log("A china tem mais habitnates");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
