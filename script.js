const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const button = document.getElementById("calcular");
const result = document.getElementById("resultado");

button.addEventListener("click", function () {
  if (!input1 || !input2 || !input3) {
    console.error("Um ou mais inputs não foram encontrados na página");
    return;
  }

  if (!input1.value || !input2.value || !input3.value) {
    result.innerHTML = "Por favor, preencha todos os campos antes de clicar em calcular";
    alert("Por favor, preencha todos os campos antes de clicar em calcular")
    return;
  }

  const nota1 = Number(input1.value) * 3;
  const nota2 = Number(input2.value) * 6;
  const nota3 = Number(input3.value) * 1;

  const media = (nota1 + nota2 + nota3) / (3 + 6 + 1);

  if (media >= 6) {
    result.style.color = "green";
    result.innerHTML = "Aprovado, a média ponderada é: " + media.toFixed(2); 
  
    // Exibe o modal de aprovação
    const modalAprovacao = document.getElementById("modal-aprovacao");
    modalAprovacao.style.display = "block";
  } else {
    result.style.color = "red";
    result.innerHTML = "Reprovado, a média ponderada é: " + media.toFixed(2);
  
    // Exibe o modal de reprovação
    const modalReprovacao = document.getElementById("modal-reprovacao");
    modalReprovacao.style.display = "block";
  }

  // Fecha o modal ao clicar no botão "Fechar"
  const closeButtons = document.querySelectorAll(".close");
  for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", function () {
      const modal = this.parentElement.parentElement;
      modal.style.display = "none";
    });
  }
});


// modal

// Obtém a referência ao modal
var modal = document.getElementById("myModal");

// Obtém a referência ao botão de fechar (span)
var span = document.getElementsByClassName("close-aviso")[0];

// Verifica se o modal já foi lido
window.onload = function() {
  if (localStorage.getItem("modalLido") !== "true") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
};

// Quando o usuário clicar no botão de fechar, oculta o modal
span.onclick = function() {
  modal.style.display = "none";
  
  // Armazena a informação de que o modal foi fechado
  localStorage.setItem("modalLido", "true");
};

// Quando o usuário clicar fora do modal, oculta-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


