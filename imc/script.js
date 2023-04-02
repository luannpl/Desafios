function resultado() {
  let pesotxt = document.getElementById("pesotxt");
  let alturatxt = document.getElementById("alturatxt");
  let peso = Number(pesotxt.value);
  let altura = Number(alturatxt.value);
  let calculo = peso / (altura * altura);
  let res = document.querySelector("#res");
  if (calculo < 18.5) {
    res.innerHTML = "Magreza";
  } else if (calculo >= 18.5 && calculo < 24.9) {
    res.innerHTML = "Normal";
  } else if (calculo >= 25 && calculo < 29.9) {
    res.innerHTML = "Sobrepeso";
  } else if (calculo >= 30 && calculo < 39.9) {
    res.innerHTML = "Obesidade";
  } else if (calculo > 40) {
    res.innerHTML = "Obesidade Grave";
  } else {
    res.innerHTML = "Digite seu peso e sua altura";
  }
}

let btn = document.querySelector(".botao");
btn.addEventListener("click", resultado);
