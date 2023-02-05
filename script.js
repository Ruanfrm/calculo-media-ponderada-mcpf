const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const button = document.getElementById("calcular");
const result = document.getElementById("resultado");

button.addEventListener("click", function () {
  if (input1 === null || input2 === null || input3 === null) {
    console.error("Um ou mais inputs não foram encontrados na página");
    return;
  }

   // Verifica se os inputs estão vazios
   if (input1.value === "" || input2.value === "" || input3.value === "") {
    result.innerHTML = "Por favor, preencha todos os inputs antes de clicar em Calcular";
    return;
  }

  const nota1 = input1.value * 3;
  const nota2 = input2.value * 6;
  const nota3 = input3.value * 1;

  const media = (nota1 + nota2 + nota3) / (3 + 6 + 1);

  

  if (media >= 6) {
    result.style.color = "green";
    result.innerHTML = "Aprovado, a média ponderada é: " + media;
  } else {
    result.style.color = "red";
    result.innerHTML = "Reprovado, a média ponderada é: " + media;
  }
});

