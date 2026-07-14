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
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showNextTestimonial() {
    testimonials[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % testimonials.length;

    testimonials[currentIndex].classList.add('active');
}

// Rotate every 4 seconds
setInterval(showNextTestimonial, 4000);

fetch('https://api.countapi.xyz/hit/mywebsite123/visits')
    .then(response => response.json())
    .then(data => {
        document.getElementById('count').textContent = data.value;
    })
    .catch(error => {
        console.error(error);
        document.getElementById('count').textContent = 'Unavailable';
    });