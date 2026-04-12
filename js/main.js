/* =============================================
   YEAR
   ============================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =============================================
   SCROLL PROGRESS BAR
   ============================================= */
const scrollBar = document.getElementById('scrollBar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  scrollBar.style.transform = `scaleX(${pct})`;
}, { passive: true });

/* =============================================
   CUSTOM CURSOR  (fine pointer devices only)
   ============================================= */
if (window.matchMedia('(pointer: fine)').matches) {
  document.body.classList.add('js-cursor');

  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  let mx = window.innerWidth / 2,  my = window.innerHeight / 2;
  let rx = mx, ry = my;

  // Dot follows instantly
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  }, { passive: true });

  // Ring follows with smooth lag
  (function animateRing() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Grow ring on interactive elements
  document.querySelectorAll('a, button, [role="button"]').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
  });
}

/* =============================================
   TEXT SCRAMBLE  (hero headline, line 1)
   ============================================= */
class TextScramble {
  constructor(el) {
    this.el    = el;
    this.chars = '01-=/\\[]{}+*#@$%?!<>';
    this._update = this._update.bind(this);
  }
  run(text) {
    const len = text.length;
    this._queue = Array.from({ length: len }, (_, i) => ({
      to:    text[i],
      start: Math.floor(Math.random() * 10),
      end:   Math.floor(Math.random() * 10) + 14,
      char:  '',
    }));
    this._frame = 0;
    cancelAnimationFrame(this._raf);
    this._raf = requestAnimationFrame(this._update);
  }
  _update() {
    let out = '', done = 0;
    for (const item of this._queue) {
      if (this._frame >= item.end) {
        done++;
        out += item.to;
      } else if (this._frame >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = this.chars[Math.floor(Math.random() * this.chars.length)];
        }
        out += `<span class="sc">${item.char}</span>`;
      } else {
        out += item.to === ' ' ? ' ' : '&nbsp;';
      }
    }
    this.el.innerHTML = out;
    if (done < this._queue.length) {
      this._frame++;
      this._raf = requestAnimationFrame(this._update);
    }
  }
}

/* =============================================
   HERO STAGGER REVEAL
   ============================================= */
function revealHero() {
  const scrambleEl = document.getElementById('scrambleLine');
  const reveals    = document.querySelectorAll('[data-reveal]');

  // Stagger each [data-reveal] element
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('revealed'), i * 140);
  });

  // Scramble the first headline line
  if (scrambleEl) {
    const original = scrambleEl.textContent.trim();
    scrambleEl.innerHTML = '';
    setTimeout(() => {
      new TextScramble(scrambleEl).run(original);
    }, 80);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', revealHero);
} else {
  revealHero();
}

/* =============================================
   COUNT-UP STATS
   ============================================= */
function countUp(el, target, duration = 1400) {
  let startTs = null;
  function step(ts) {
    if (!startTs) startTs = ts;
    const p = Math.min((ts - startTs) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);   // ease-out cubic
    el.textContent = Math.floor(ease * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

const statsObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const count     = parseInt(el.dataset.count,     10);
    const yearSince = parseInt(el.dataset.yearSince, 10);
    if (count)     countUp(el, count);
    if (yearSince) countUp(el, new Date().getFullYear() - yearSince);
    statsObs.unobserve(el);
  });
}, { threshold: 0.6 });

document.querySelectorAll('[data-count], [data-year-since]')
        .forEach(el => statsObs.observe(el));

/* =============================================
   GENERAL SCROLL-IN  ([data-animate])
   ============================================= */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    setTimeout(() => entry.target.classList.add('visible'), i * 110);
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll('[data-animate]').forEach(el => revealObs.observe(el));

/* =============================================
   MAGNETIC BUTTONS  ([data-magnetic])
   ============================================= */
document.querySelectorAll('[data-magnetic]').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.28;
    const y = (e.clientY - r.top  - r.height / 2) * 0.38;
    el.style.transform = `translate(${x}px,${y}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

/* =============================================
   3-D CARD TILT  (bento cards)
   ============================================= */
document.querySelectorAll('.bento__card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform    = `perspective(1000px) rotateX(${-y*6}deg) rotateY(${x*6}deg) scale(1.02)`;
    card.style.transition   = 'transform 0.06s ease, border-color .25s, box-shadow .25s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform  = '';
    card.style.transition = 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity .55s, border-color .25s, box-shadow .25s';
  });
});

/* =============================================
   PLAY BADGES  (cards with data-video)
   ============================================= */
document.querySelectorAll('.bento__card[data-video]').forEach(card => {
  const vid = (card.dataset.video || '').trim();
  if (!vid) return;
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
  modalClient.textContent = card.dataset.client || '';
  modalTitle.textContent  = card.dataset.title  || '';
  modalTags.textContent   = card.dataset.tags   || '';
  const vid = (card.dataset.video || '').trim();
  if (vid) {
    modalMedia.innerHTML = `<div class="video-wrap"><iframe src="https://www.youtube.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen title="${card.dataset.title || ''}"></iframe></div>`;
  } else if (card.dataset.image) {
    modalMedia.innerHTML = `<img src="${card.dataset.image}" alt="${card.dataset.title || ''}" />`;
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
  modalMedia.innerHTML = '';
}

document.querySelectorAll('.bento__card').forEach(card => {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('click', () => openModal(card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
  });
});

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* =============================================
   NAV ACTIVE LINK ON SCROLL
   ============================================= */
const navLinks = document.querySelectorAll('.nav__links a');
const sections = document.querySelectorAll('section[id]');

const navObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.remove('active'));
    const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => navObs.observe(s));
