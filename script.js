document.addEventListener("DOMContentLoaded", () => {
  const helloButtons = document.querySelectorAll('#helloButton');
  const messages = document.querySelectorAll('#message');

  helloButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      messages.forEach(msg => {
        msg.textContent = 'Hello! Welcome to my portfolio page.';
      });
    });
  });

  const themeButton = document.getElementById('themeButton');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark');
      themeButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }
});
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flipped");
    });
});
