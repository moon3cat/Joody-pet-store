window.onload = function () {
  document.getElementById("welcomeText").textContent = "";
  typeWriter();
};

const text = "Welcome to Joody Pet Store 🐾";
const speed = 80;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("welcomeText").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function here() {
  document.getElementById("offer-message").textContent = "Thank you for registering, the offer has been used successfully!";
}

function toggleMenu() {
  const menu = document.getElementById('navbar');
  const icon = document.getElementById('menu-icon');

  menu.classList.toggle('responsive');

  if (menu.classList.contains('responsive')) {
    icon.textContent = "✕";
  } else {
    icon.textContent = "☰";
  }
}
