/* === 1. Greeting Message with Typing Effect === */
const homeSection = document.querySelector(".home-text");

if (homeSection) {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) message = "🌅 Good Morning, future coder!";
  else if (hour < 18) message = "☀️ Good Afternoon, future coder!";
  else message = "🌙 Good Evening, future coder!";

  const greetingText = document.createElement("h1");
  greetingText.classList.add("greeting");
  homeSection.prepend(greetingText);

  function typeText(element, text, speed = 100) {
    let i = 0;
    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    typing();
  }

  typeText(greetingText, message, 150);
}

/* === 2. Scroll to Top Button === */
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆️ Top";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollBtn.style.display = "block";
  else scrollBtn.style.display = "none";
});

/* === 3. Navigation Hover Effect === */
const navLinks = document.querySelectorAll(".nav-links li a");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => link.style.color = "#00bcd4");
  link.addEventListener("mouseout", () => link.style.color = "");
});

/* === 4. Contact Form Validation === */
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    alert(`✅ Thank you, ${name}! Your message has been sent.`);
    form.reset();
  });
}

/* === 5. Dark/Light Mode Toggle === */
const toggle = document.createElement("button");
toggle.textContent = "🌙";
toggle.classList.add("theme-toggle");
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

/* === 6. Random Quote Display === */
const quotes = [
  "“The best way to predict the future is to create it.”",
  "“Technology empowers education.”",
  "“Keep learning — keep growing.”",
  "“Innovation begins with curiosity.”"
];

if (homeSection) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteEl = document.createElement("p");
  quoteEl.classList.add("dynamic-quote");
  quoteEl.textContent = randomQuote;
  homeSection.appendChild(quoteEl);
}

/* === 7. Go Back Button === */
const goBackBtn = document.getElementById('goBackBtn');

if (goBackBtn) {
  const currentPage = window.location.pathname.split('/').pop().toLowerCase();
  const isHome = currentPage === '' || currentPage === 'index.html';

  if (isHome) {
    goBackBtn.style.display = 'none';
  } else {
    goBackBtn.style.display = 'block';
  }

  goBackBtn.addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = 'index.html';
    }
  });
}
