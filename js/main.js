/* =============================================
   DYNAMIC YEAR
   ============================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =============================================
   SCROLL-IN ANIMATION
   Targets [data-animate] — used on .step and
   .bento__card elements.
   ============================================= */
const revealEls = document.querySelectorAll('[data-animate]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* =============================================
   PLAY BADGE — auto-rendered for cards with
   data-video attribute set
   ============================================= */
document.querySelectorAll('.bento__card[data-video]').forEach((card) => {
  const videoId = (card.dataset.video || '').trim();
  if (!videoId) return;
  const badge = document.createElement('div');
  badge.className = 'bento__play-badge';
  badge.setAttribute('aria-hidden', 'true');
  badge.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  card.appendChild(badge);
});

/* =============================================
   LIGHTBOX MODAL
   ============================================= */
const modal       = document.getElementById('modal');
const modalMedia  = document.getElementById('modalMedia');
const modalTitle  = document.getElementById('modalTitle');
const modalClient = document.getElementById('modalClient');
const modalTags   = document.getElementById('modalTags');
const modalClose  = document.getElementById('modalClose');
const backdrop    = modal.querySelector('.modal__backdrop');

function openModal(card) {
  const title   = card.dataset.title  || '';
  const client  = card.dataset.client || '';
  const image   = card.dataset.image  || '';
  const tags    = card.dataset.tags   || '';
  const videoId = (card.dataset.video || '').trim();

  modalClient.textContent = client;
  modalTitle.textContent  = title;
  modalTags.textContent   = tags;

  if (videoId) {
    modalMedia.innerHTML = `
      <div class="video-wrap">
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="${title}">
        </iframe>
      </div>`;
  } else if (image) {
    modalMedia.innerHTML = `<img src="${image}" alt="${title}" />`;
  } else {
    modalMedia.innerHTML = '';
  }

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  modalMedia.innerHTML = ''; // stops video playback
}

document.querySelectorAll('.bento__card').forEach((card) => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('click', () => openModal(card));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
  });
});

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

/* =============================================
   NAV — active link highlight on scroll
   ============================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) => a.style.color = '');
        const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = '#fff';
      }
    });
  },
  { rootMargin: '-30% 0px -60% 0px' }
);

sections.forEach((s) => navObserver.observe(s));
