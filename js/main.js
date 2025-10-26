// Mobile menu toggle with ARIA
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    mobileMenu.classList.toggle('hidden');
  });
}

// Footer year
const yEl = document.getElementById('year');
if (yEl) { yEl.textContent = new Date().getFullYear(); }

// HERO SLIDER LOGIC (text-only slides)
const heroSlides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideInterval = null;
const SLIDE_TIME = 6000; // ms

function setActiveSlide(index) {
  heroSlides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      slide.classList.remove('inactive-left');
      slide.setAttribute('aria-hidden', 'false');
    } else {
      if (i < index) {
        slide.classList.remove('active');
        slide.classList.add('inactive-left');
      } else {
        slide.classList.remove('active', 'inactive-left');
      }
      slide.setAttribute('aria-hidden', 'true');
    }
  });

  indicators.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('bg-primary', 'ring-primary');
      dot.classList.remove('bg-white/30', 'ring-transparent');
    } else {
      dot.classList.remove('bg-primary', 'ring-primary');
      dot.classList.add('bg-white/30', 'ring-transparent');
    }
  });

  currentSlide = index;
}

function nextHeroSlide() {
  const next = (currentSlide + 1) % heroSlides.length;
  setActiveSlide(next);
}

function prevHeroSlide() {
  const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  setActiveSlide(prev);
}

function startAuto() {
  stopAuto();
  // Respeta preferencias de reduce-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    slideInterval = setInterval(nextHeroSlide, SLIDE_TIME);
  }
}

function stopAuto() {
  if (slideInterval) clearInterval(slideInterval);
}

// hook buttons
const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    nextHeroSlide();
    startAuto();
  });
}
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    prevHeroSlide();
    startAuto();
  });
}

// indicators click
indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    setActiveSlide(i);
    startAuto();
  });
});

// init slider
if (heroSlides.length) {
  setActiveSlide(0);
  startAuto();
}

// Contact form — Formspree (uses data-formspree-id or form action URL)
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    const preferNetlify = contactForm.dataset.useNetlify === 'true';
    if (preferNetlify) {
      // Dejar envío nativo a Netlify Forms (remueve action externo si existe)
      if (contactForm.hasAttribute('action')) contactForm.removeAttribute('action');
      return; // no prevenimos el envío
    }
    e.preventDefault();
    const formId = contactForm.dataset.formspreeId;
    const endpointFromData = formId && formId !== 'YOUR_FORM_ID' ? `https://formspree.io/f/${formId}` : null;
    const endpointFromAction = contactForm.getAttribute('action') || null;
    const endpoint = endpointFromData || endpointFromAction;
    if (!endpoint) {
      formMsg.textContent = 'Configura tu Formspree (data-formspree-id o action del formulario).';
      return;
    }
    formMsg.textContent = 'Enviando...';

    const data = new FormData(contactForm);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      if (res.ok) {
        formMsg.textContent = '¡Gracias! Hemos recibido tu mensaje.';
        contactForm.reset();
      } else {
        formMsg.textContent = 'No se pudo enviar. Intenta nuevamente o escríbenos por WhatsApp.';
      }
    } catch (err) {
      formMsg.textContent = 'Error de red. Intenta nuevamente.';
    }
  });
}
