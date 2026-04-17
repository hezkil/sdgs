// Smooth scroll & form handler
function handleSubmit() {
  const name  = document.querySelector('.aksi-form input[type="text"]').value.trim();
  const email = document.querySelector('.aksi-form input[type="email"]').value.trim();
  if (!name || !email) {
    alert('Mohon isi nama dan email Anda terlebih dahulu.');
    return;
  }
  const btn = document.querySelector('.btn-submit');
  btn.textContent = 'Mengirim...';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }, 1200);
}

// Intersection observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.focus-card, .sdg-card, .progress-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Nav scroll shadow
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
