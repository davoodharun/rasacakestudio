(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      var open = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !open);
      nav.classList.toggle('is-open');
      document.body.style.overflow = open ? '' : 'hidden';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // Contact form: on Netlify allow default submit; on GitHub Pages (static) show success message
  var form = document.getElementById('contact-form');
  var formSuccess = document.getElementById('form-success');
  if (form && formSuccess) {
    form.addEventListener('submit', function (e) {
      var onNetlify = form.getAttribute('data-netlify') === 'true' && window.location.hostname.includes('netlify');
      if (!onNetlify) {
        e.preventDefault();
        form.classList.add('hidden');
        formSuccess.classList.remove('hidden');
        formSuccess.focus();
      }
    });
  }

  // Gallery lightbox
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var galleryLinks = document.querySelectorAll('.gallery-link');

  function openLightbox(src, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Cake photo';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (galleryLinks.length) {
    galleryLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(link.href, link.getAttribute('data-caption') || '');
      });
    });
  }

  if (lightbox) {
    var closeBtn = lightbox.querySelector('.lightbox-close');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox && !lightbox.classList.contains('hidden')) {
        closeLightbox();
      }
    });
  }
})();
