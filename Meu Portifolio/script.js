const texto = "Bem-vindo ao meu Portfólio Website!";
const elemento = document.getElementById("texto-animado");
let index = 0;

function digitar() {
  if (index < texto.length) {
    elemento.innerHTML += texto.charAt(index);
    index++;
    setTimeout(digitar, 100);
  } else {
    // Adiciona o ponto colorido no final
    const ponto = document.createElement("span");
    ponto.textContent = ".";
    ponto.style.color = "#00eeff";
    elemento.appendChild(ponto);
  }
}

digitar();

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});