const inputs = [
  document.getElementById("input1"),
  document.getElementById("input2"),
  document.getElementById("input3")
];
const button = document.getElementById("calcular");
const result = document.getElementById("resultado");
const modals = {
  aprovacao: document.getElementById("modal-aprovacao"),
  reprovacao: document.getElementById("modal-reprovacao")
};
const closeButtons = document.querySelectorAll(".close");
const modalAviso = document.getElementById("myModal");
const closeModalAviso = document.getElementsByClassName("close-aviso")[0];

button.addEventListener("click", () => {
  if (!inputs.every(input => input && input.value)) {
    console.error("Um ou mais inputs não foram encontrados ou preenchidos na página");
    result.innerHTML = "Por favor, preencha todos os campos antes de clicar em calcular";
    alert("Por favor, preencha todos os campos antes de clicar em calcular");
    return;
  }

  const notas = inputs.map(input => Number(input.value));
  const pesos = [3, 6, 1];
  const media = notas.reduce((ac, n, i) => ac + n * pesos[i], 0) / pesos.reduce((ac, p) => ac + p, 0);

  result.style.color = media >= 6 ? "green" : "red";
  result.innerHTML = `${media >= 6 ? "Aprovado" : "Reprovado"}, a média ponderada é: ${media.toFixed(2)}`;

  modals[media >= 6 ? "aprovacao" : "reprovacao"].style.display = "block";
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener("click", () => {
    closeButton.parentElement.parentElement.style.display = "none";
  });
});

window.onload = () => {
  if (localStorage.getItem("modalLido") !== "true") {
    modalAviso.style.display = "block";
  } else {
    modalAviso.style.display = "none";
  }
};

closeModalAviso.addEventListener("click", () => {
  modalAviso.style.display = "none";
  localStorage.setItem("modalLido", "true");
});

window.addEventListener("click", event => {
  if (event.target === modalAviso) {
    modalAviso.style.display = "none";
  }
});
