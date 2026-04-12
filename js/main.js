/* =============================================
   DYNAMIC YEAR
   ============================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =============================================
   SCROLL-IN ANIMATION
   Uses IntersectionObserver to add .visible
   to [data-animate] elements as they enter view.
   ============================================= */
const animatedEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  animatedEls.forEach((el) => observer.observe(el));
} else {
  // Fallback for browsers without IntersectionObserver
  animatedEls.forEach((el) => el.classList.add('visible'));
}

/* =============================================
   CONTACT FORM
   Client-side validation + fake submission.
   Replace the setTimeout block with a real fetch()
   call to your backend / form service.
   ============================================= */
const form   = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation
  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    showStatus('Please fill in all fields.', 'error');
    return;
  }
  if (!emailRe.test(email)) {
    showStatus('Please enter a valid email address.', 'error');
    return;
  }

  // Simulate async send
  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  setTimeout(() => {
    showStatus('Message sent! We\'ll be in touch soon.', 'success');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }, 1200);
});

function showStatus(msg, type) {
  status.textContent = msg;
  status.style.color = type === 'error' ? '#ff6b6b' : 'var(--color-primary)';
}

/* =============================================
   SMOOTH NAV HIGHLIGHT
   Adds 'active' class to the nav link whose
   section is currently in view.
   ============================================= */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => navObserver.observe(s));
