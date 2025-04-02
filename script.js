document.getElementById("calcular").addEventListener("click", function () {
  // Capturar os valores dos inputs
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  // Verificar se os valores são válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById("resultado-imc").textContent = "IMC: ---";
    document.getElementById("classificacao").textContent =
      "Classificação: Por favor, insira valores válidos";
    return;
  }

  // Calcular o IMC
  const imc = peso / (altura * altura);

  // Exibir o resultado do IMC
  document.getElementById("resultado-imc").textContent = `IMC: ${imc.toFixed(
    2
  )}`;

  // Determinar a classificação
  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    classificacao = "Obesidade Grau I";
  } else if (imc >= 35 && imc < 40) {
    classificacao = "Obesidade Grau II";
  } else {
    classificacao = "Obesidade Grau III";
  }

  // Exibir a classificação
  document.getElementById(
    "classificacao"
  ).textContent = `Classificação: ${classificacao}`;
});
