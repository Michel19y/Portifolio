// Progress bar
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progress').style.width = scrolled + '%';
});

// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// Typed text
const phrases = [
  'Desenvolvedor Full Stack',
  'Automação com n8n & IA',
  'Código limpo por princípio',
  'Sistemas que fazem sentido',
  'Backend · Frontend · BD'
];
let pi = 0, ci = 0, deleting = false;
function type() {
  const el = document.getElementById('typed-text');
  const phrase = phrases[pi];
  if (!deleting) {
    el.textContent = phrase.slice(0, ci++);
    if (ci > phrase.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = phrase.slice(0, ci--);
    if (ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; ci = 0; }
  }
  setTimeout(type, deleting ? 50 : 80);
}
setTimeout(type, 1200);

// Intersection Observer for reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));

// Stagger reveals
document.querySelectorAll('.skill-category, .project-card').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.07) + 's';
});

// Form
// function submitForm(e) {
//   e.preventDefault();
//   const btn = e.target;
//   btn.textContent = '✓ Mensagem enviada!';
//   btn.style.background = 'var(--green)';
//   setTimeout(() => { btn.textContent = 'Enviar mensagem →'; btn.style.background = ''; }, 3000);
// }



/// email enviado
emailjs.init({
  publicKey: "i9d9kKy-rYaF1liwU",
});

function submitForm(event) {
  event.preventDefault();

  const params = {
    name: document.querySelector('input[type="text"]').value,
    email: document.querySelector('input[type="email"]').value,
    message: document.querySelector('textarea').value
  };

  emailjs.send(
    "service_y3xhadq",
    "template_0eubst9",
    params
  )
    .then(() => {
      alert("Mensagem enviada com sucesso!");
    })
    .catch((error) => {
      console.log(error);
      alert(JSON.stringify(error));
    });
}



// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
});