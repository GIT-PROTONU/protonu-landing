/* =============================================
   SCROLL PROGRESS BAR  (RAF-throttled)
   ============================================= */
const scrollBar = document.getElementById('scrollBar');
let scrollRafPending = false;
window.addEventListener('scroll', () => {
  if (scrollRafPending) return;
  scrollRafPending = true;
  requestAnimationFrame(() => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    scrollBar.style.transform = `scaleX(${pct})`;
    scrollRafPending = false;
  });
}, { passive: true });

/* =============================================
   TYPEWRITER  (hero headline, line 1)
   ============================================= */
function typewriter(el, text, speed) {
  el.textContent = '';
  el.style.opacity = '1';
  var i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(tick, speed);
    }
  }
  setTimeout(tick, 120);
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

  // Typewriter on the first headline line
  if (scrambleEl) {
    const original = scrambleEl.textContent.trim();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scrambleEl.textContent = original;
      scrambleEl.style.opacity = '1';
    } else {
      scrambleEl.textContent = '';
      typewriter(scrambleEl, original, 48);
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', revealHero);
} else {
  revealHero();
}

/* =============================================
   HERO ROBOT SHOWCASE  (auto-cycling slides)
   ============================================= */
(function initHeroShowcase() {
  const showcase = document.getElementById('heroShowcase');
  if (!showcase) return;

  const slides     = Array.from(showcase.querySelectorAll('.hero__slide'));
  const caption    = showcase.querySelector('.hero__caption');
  const capClient  = document.getElementById('heroCaptionClient');
  const capTitle   = document.getElementById('heroCaptionTitle');
  const progress   = document.getElementById('heroProgressBar');
  if (slides.length < 2) return;

  const SLIDE_MS = 5000;     // visible time per slide
  const FADE_MS  = 450;      // caption fade-out before swap
  let index      = 0;

  // Honour reduced-motion: stay on first slide, no animations
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Sync the CSS progress-bar duration with JS timing
  showcase.style.setProperty('--hero-slide-dur', SLIDE_MS + 'ms');

  function startProgress() {
    if (!progress) return;
    progress.classList.remove('is-running');
    // force reflow so the animation restarts cleanly
    void progress.offsetWidth;
    progress.classList.add('is-running');
  }

  function advance() {
    const next      = (index + 1) % slides.length;
    const nextSlide = slides[next];

    // Fade caption out, swap text mid-fade, fade back in
    if (caption) caption.classList.add('is-changing');
    setTimeout(() => {
      if (capClient && nextSlide.dataset.client) capClient.textContent = nextSlide.dataset.client;
      if (capTitle  && nextSlide.dataset.title)  capTitle.textContent  = nextSlide.dataset.title;
      if (caption) caption.classList.remove('is-changing');
    }, FADE_MS);

    slides[index].classList.remove('is-active');
    nextSlide.classList.add('is-active');
    index = next;
    startProgress();
  }

  startProgress();
  setInterval(advance, SLIDE_MS);
})();

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
   LAZY BACKGROUND IMAGES  (data-bg attribute)
   ============================================= */
const bgObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    // Quote and encode to prevent CSS injection via a malicious data-bg value
    el.style.backgroundImage = `url("${el.dataset.bg.replace(/\\/g, '\\\\').replace(/"/g, '%22')}")`;
    bgObs.unobserve(el);
  });
}, { rootMargin: '200px' });

document.querySelectorAll('[data-bg]').forEach(el => bgObs.observe(el));

/* =============================================
   PLAY BADGES  (cards with data-video or data-instagram)
   ============================================= */
document.querySelectorAll('.bento__card').forEach(card => {
  const vid   = (card.dataset.video     || '').trim();
  const igId  = (card.dataset.instagram || '').trim();
  if (!vid && !igId) return;
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
const modalDesc   = document.getElementById('modalDesc');
const modalTags   = document.getElementById('modalTags');
const modalLink   = document.getElementById('modalLink');
const modalClose  = document.getElementById('modalClose');
const backdrop    = modal.querySelector('.modal__backdrop');

// Allow only the standard YouTube video ID charset (alphanumeric, dash, underscore)
function isSafeYTId(id) {
  return /^[\w-]{1,20}$/.test(id);
}

// Instagram shortcodes use the same charset; they're longer for Reels
function isSafeIGId(id) {
  return /^[\w-]{1,30}$/.test(id);
}

// Build Instagram Reel/Post iframe embed (vertical format)
function buildIGEmbed(id, title) {
  const wrap = document.createElement('div');
  wrap.className = 'video-wrap video-wrap--instagram';
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.instagram.com/reel/${encodeURIComponent(id)}/embed`;
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.scrolling = 'no';
  iframe.title = title || '';
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox');
  wrap.appendChild(iframe);
  return wrap;
}

// Build YouTube thumbnail fallback link (for videos with embedding disabled)
function buildYTThumbnail(vid, title) {
  const wrap = document.createElement('div');
  wrap.className = 'video-wrap video-wrap--fallback';
  const safeVid = encodeURIComponent(vid);
  const img = document.createElement('img');
  img.src = `https://img.youtube.com/vi/${safeVid}/hqdefault.jpg`;
  img.alt = title || 'Video thumbnail';
  const link = document.createElement('a');
  link.href = `https://www.youtube.com/watch?v=${safeVid}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'yt-fallback-link';
  link.setAttribute('aria-label', 'Watch on YouTube');
  const icon = document.createElement('span');
  icon.className = 'yt-play-icon';
  icon.setAttribute('aria-hidden', 'true');
  link.appendChild(icon);
  wrap.appendChild(img);
  wrap.appendChild(link);
  return wrap;
}

// Build YouTube iframe via DOM — never innerHTML — to prevent XSS via data attributes
// Falls back to a clickable thumbnail if embedding is blocked (e.g. Error 153)
function buildYTIframe(vid, title) {
  const wrap = document.createElement('div');
  wrap.className = 'video-wrap';
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(vid)}?autoplay=1&rel=0&modestbranding=1`;
  // clipboard-write omitted — grants silent clipboard access, not needed for playback
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.title = title || '';
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation allow-popups');
  iframe.addEventListener('error', () => {
    wrap.replaceWith(buildYTThumbnail(vid, title));
  });
  wrap.appendChild(iframe);
  return wrap;
}

function openModal(card) {
  modalClient.textContent = card.dataset.client      || '';
  modalTitle.textContent  = card.dataset.title       || '';
  modalDesc.textContent   = card.dataset.description || '';
  modalTags.textContent   = card.dataset.tags        || '';

  const link = (card.dataset.link || '').trim();
  if (link) {
    modalLink.href         = link;
    modalLink.hidden       = false;
    modalClient.href       = link;
    modalClient.classList.add('modal__client--linked');
  } else {
    modalLink.href         = '#';
    modalLink.hidden       = true;
    modalClient.removeAttribute('href');
    modalClient.classList.remove('modal__client--linked');
  }

  modalMedia.innerHTML = '';  // clear previous content safely
  const vid  = (card.dataset.video     || '').trim();
  const igId = (card.dataset.instagram || '').trim();
  if (igId && isSafeIGId(igId)) {
    modalMedia.appendChild(buildIGEmbed(igId, card.dataset.title || ''));
  } else if (vid && isSafeYTId(vid)) {
    const canEmbed = card.dataset.videoEmbed !== 'false';
    modalMedia.appendChild(
      canEmbed ? buildYTIframe(vid, card.dataset.title || '')
               : buildYTThumbnail(vid, card.dataset.title || '')
    );
  } else if (card.dataset.image) {
    const img = document.createElement('img');
    img.src = card.dataset.image;
    img.alt = card.dataset.title || '';
    const imgLink = (card.dataset.imageLink || '').trim();
    if (imgLink) {
      const a = document.createElement('a');
      a.href = imgLink;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'modal__media-link';
      a.appendChild(img);
      modalMedia.appendChild(a);
    } else {
      modalMedia.appendChild(img);
    }
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
   HERO VIDEO BUTTON
   "Watch in Action" — add a YouTube ID to data-hero-video on the button to enable
   ============================================= */
const heroVideoBtn = document.querySelector('.hero__video-btn');
if (heroVideoBtn) {
  heroVideoBtn.addEventListener('click', () => {
    const vid = (heroVideoBtn.dataset.heroVideo || '').trim();
    modalMedia.innerHTML = '';  // clear previous content safely
    if (vid && isSafeYTId(vid)) {
      modalMedia.appendChild(buildYTIframe(vid, 'PROTONU in Action'));
    } else {
      const img = document.createElement('img');
      img.src = 'assets/images/er.webp';
      img.alt = 'PROTONU automation demo';
      modalMedia.appendChild(img);
    }
    modalClient.textContent = 'PROTONU';
    modalTitle.textContent  = 'Automation in Action';
    modalTags.textContent   = (vid && isSafeYTId(vid)) ? '' : 'Add your YouTube video ID to the data-hero-video attribute on the hero button';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  });
}

/* =============================================
   ROI CALCULATOR
   ============================================= */
function makeAnimator() {
  let raf = null;
  return function animate(el, target, formatter) {
    cancelAnimationFrame(raf);
    const from    = parseFloat(el.dataset.current) || 0;
    const startTs = performance.now();
    const dur     = 600;
    function step(ts) {
      const p    = Math.min((ts - startTs) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const val  = Math.round(from + (target - from) * ease);
      el.textContent    = formatter(val);
      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        el.textContent    = formatter(target);
        el.dataset.current = target;
      }
    }
    raf = requestAnimationFrame(step);
  };
}

const animSavings = makeAnimator();
const animPayback = makeAnimator();

function fmtEuro(n) {
  if (n <= 0) return '—';
  if (n >= 1000) return '€' + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + 'k/yr';
  return '€' + n + '/yr';
}
function fmtMonths(n) {
  return n > 0 ? n + ' mo' : '—';
}

function calcROI() {
  const industry = parseFloat(document.getElementById('roiIndustry').value) || 1;
  // Clamp to the HTML min/max so unrealistic inputs can't produce misleading figures
  const hours    = Math.min(24,  Math.max(0, parseFloat(document.getElementById('roiHours').value)   || 0));
  const workers  = Math.min(200, Math.max(0, parseFloat(document.getElementById('roiWorkers').value) || 0));
  const rate     = Math.min(300, Math.max(0, parseFloat(document.getElementById('roiRate').value)    || 0));

  // 22 working days/month · 65 % automation efficiency gain · industry multiplier
  const monthSaving  = hours * workers * rate * 22 * 0.65 * industry;
  const annualSaving = Math.round(monthSaving * 12 / 500) * 500;

  // Rough implementation cost estimate (capped between €25 k and €300 k)
  const implCost = Math.min(Math.max(annualSaving * 0.55, 25000), 300000);
  const payback  = monthSaving > 0 ? Math.round(implCost / monthSaving) : 0;

  const savingsEl = document.getElementById('roiSavings');
  const paybackEl = document.getElementById('roiPayback');
  if (!savingsEl || !paybackEl) return;

  animSavings(savingsEl, annualSaving, fmtEuro);
  animPayback(paybackEl, payback,      fmtMonths);
}

const roiInputs = document.querySelectorAll('#roiIndustry,#roiHours,#roiWorkers,#roiRate');
roiInputs.forEach(el => el.addEventListener('input', calcROI));
if (roiInputs.length) calcROI();

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

/* =============================================
   MARQUEE — exact pixel offset
   ============================================= */
requestAnimationFrame(() => {
  const track = document.querySelector('.marquee__track');
  if (track) {
    track.style.setProperty('--marquee-offset', `-${Math.round(track.scrollWidth / 2)}px`);
  }
});
