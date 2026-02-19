let numero = 10;
let numero2 = 20;
numero += numero2;

console.log(numero);

//operador ternario
//retorna o valor dependendo de algum caso e ignora o outro ex
let idade = 20;
naoPossuiDiabetes = false;

let podeBeber =
  idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

let possuiFaculdade = true;
if (possuiFaculdade) console.log("possui");
