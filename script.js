// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Add dark mode toggle button in footer
const footer = document.querySelector('footer');
const btn = document.createElement('button');
btn.innerText = "🌙 Toggle Dark Mode";
btn.style.marginTop = "10px";
btn.style.padding = "8px 12px";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.background = "#fff";
btn.style.color = "#007acc";
footer.appendChild(btn);

// Dark mode toggle functionality
btn.addEventListener('click', () => {
  document.body.classList.toggle("dark-mode");
});


