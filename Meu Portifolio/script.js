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

const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    sidebar.style.left = '0'; // abre menu
});

closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px'; // fecha menu
});

// Fecha menu ao clicar em qualquer link
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.left = '-250px';
    });
});