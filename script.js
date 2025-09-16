// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark mode toggle
const footer = document.querySelector('footer');
const btn = document.createElement('button');
btn.innerText = "🌙 Toggle Dark Mode";
btn.className = "btn";
btn.style.marginLeft = "10px";
footer.appendChild(btn);

btn.addEventListener('click', () => {
  document.body.classList.toggle("dark-mode");
});

// Dark mode style
const style = document.createElement('style');
style.innerHTML = `
.dark-mode {
  background: #222;
  color: #eee;
}
.dark-mode .card {
  background: #333;
  color: #eee;
}
.dark-mode header, .dark-mode footer {
  background: #111;
}
.dark-mode .bar div {
  background: #00c6ff;
}
`;
document.head.appendChild(style);



