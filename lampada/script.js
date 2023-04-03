let img = document.getElementById("imagens");
let btnLigar = document.getElementById("btnLigar");
let btnDesligar = document.getElementById("btnDesligar");

function ligar() {
  img.src = "./img/ligada.jpg";
}
btnLigar.addEventListener("click", ligar);
img.addEventListener("mouseenter", ligar);

function desligar() {
  img.src = "./img/desligada.jpg";
}
btnDesligar.addEventListener("click", desligar);
img.addEventListener("mouseleave", desligar);

function quebrada() {
  img.src = "./img/quebrada.jpg";
}
img.addEventListener("dblclick", quebrada);
