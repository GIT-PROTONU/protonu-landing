/* =============================================
   DYNAMIC YEAR IN FOOTER
   ============================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =============================================
   SCROLL-IN ANIMATION FOR PROJECT CARDS
   ============================================= */
const animatedEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger each card slightly
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  animatedEls.forEach((el) => observer.observe(el));
} else {
  animatedEls.forEach((el) => el.classList.add('visible'));
}
