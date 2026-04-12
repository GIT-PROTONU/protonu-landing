/* =============================================
   DYNAMIC YEAR
   ============================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =============================================
   BENTO GRID — scroll-in animation
   ============================================= */
const cards = document.querySelectorAll('.bento__card[data-animate]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

cards.forEach((card) => revealObserver.observe(card));

/* =============================================
   PLAY BADGE — render dynamically for cards
   that have data-video set
   ============================================= */
cards.forEach((card) => {
  const videoId = card.dataset.video;
  if (videoId && videoId.trim()) {
    const badge = document.createElement('div');
    badge.className = 'bento__play-badge';
    badge.setAttribute('aria-hidden', 'true');
    badge.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z"/>
      </svg>`;
    card.appendChild(badge);
  }
});

/* =============================================
   LIGHTBOX / MODAL
   ============================================= */
const modal      = document.getElementById('modal');
const modalMedia = document.getElementById('modalMedia');
const modalTitle = document.getElementById('modalTitle');
const modalClient = document.getElementById('modalClient');
const modalClose = document.getElementById('modalClose');
const backdrop   = modal.querySelector('.modal__backdrop');

function openModal(card) {
  const title   = card.dataset.title  || '';
  const client  = card.dataset.client || '';
  const image   = card.dataset.image  || '';
  const videoId = (card.dataset.video || '').trim();

  modalTitle.textContent  = title;
  modalClient.textContent = client;

  if (videoId) {
    // YouTube embed
    modalMedia.innerHTML = `
      <div class="video-wrap">
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
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
  // Stop video playback by clearing the iframe src
  modalMedia.innerHTML = '';
}

// Open on card or button click
document.querySelectorAll('.bento__card').forEach((card) => {
  card.addEventListener('click', () => openModal(card));
  // Keyboard accessibility
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card);
    }
  });
});

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});
