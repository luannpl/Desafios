// let botao = document.querySelectorAll(".botao");
// // display = display.innerText;
// function inserir(valor) {
//   let display = document.getElementById("display");
//   display.innerHTML = valor;
// }
// function soma(num1, num2) {
//   return num1 + num2;
// }
// function subtrair(num1, num2) {
//   return num1 - num2;
// }
// function multiplicar(num1, num2) {
//   return num1 * num2;
// }
// function divisao(num1, num2) {
//   return num1 / num2;
// }

// function resposta() {
//   if (num1 + num2) {
//     soma();
//   } else if (num1 - num2) {
//     subtrair();
//   } else if (num1 * num2) {
//     multiplicar();
//   } else {
//     divisao();
//   }
// }

// function limpar() {
//   display.innerText = "";
// }
const display = document.getElementById("display");
const numeros = document.querySelectorAll("[id*=tecla]");
const operadores = document.querySelectorAll("[id*=operador]");

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
  if (operacaoPendente()) {
    const numeroAtual = parseFloat(display.textContent);
    novoNumero = true;
    const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
    atualizarDisplay(resultado);
    // if (operador == "+") {
    //   atualizarDisplay(numeroAnterior + numeroAtual);
    // } else if (operador == "-") {
    //   atualizarDisplay(numeroAnterior - numeroAtual);
    // } else if (operador == "*") {
    //   atualizarDisplay(numeroAnterior * numeroAtual);
    // } else if (operador == "/") {
    //   atualizarDisplay(numeroAnterior / numeroAtual);
    // }
  }
};

const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto;
    novoNumero = false;
  } else {
    display.textContent += texto;
  }
};

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach((numero) => numero.addEventListener("click", inserirNumero));

const selecionarOperador = (evento) => {
  if (!novoNumero) {
    calcular();
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = parseFloat(display.textContent);
  }
};

operadores.forEach((operador) =>
  operador.addEventListener("click", selecionarOperador)
);

const ativarIgual = () => {
  calcular();
  operador = undefined;
};
document.getElementById("igual").addEventListener("click", ativarIgual);

let limparDisplay = document.getElementById("limparDisplay");
function limpar() {
  display.innerHTML = "";
}
limparDisplay.addEventListener("click", limpar);