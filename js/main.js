(function () {
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('nav-toggle');
  var panel = document.getElementById('mobile-panel');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setNavOpen(open) {
    if (!header) return;
    header.classList.toggle('is-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    if (panel) {
      if (open) panel.removeAttribute('hidden');
      else panel.setAttribute('hidden', '');
    }
  }

  if (header && toggle && panel) {
    toggle.addEventListener('click', function () {
      setNavOpen(!header.classList.contains('is-open'));
    });
    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setNavOpen(false);
      });
    });
  }

  if (header) {
    window.addEventListener(
      'scroll',
      function () {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
      },
      { passive: true }
    );
  }

  /* —— Demo modal —— */
  var modal = document.getElementById('demo-modal');
  var form = document.getElementById('demo-form');
  var statusEl = document.getElementById('demo-form-status');
  var submitBtn = document.getElementById('demo-submit');
  var lastFocus = null;

  function openDemo() {
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setNavOpen(false);
    var first = modal.querySelector('input, select, textarea, button');
    if (first) first.focus();
  }

  function closeDemo() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll('[data-open-demo]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openDemo();
    });
  });

  if (modal) {
    modal.querySelectorAll('[data-close-demo]').forEach(function (el) {
      el.addEventListener('click', closeDemo);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('is-open')) closeDemo();
      else setNavOpen(false);
    }
  });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!statusEl || !submitBtn) return;

      var honey = form.querySelector('[name="_honey"]');
      if (honey && honey.value) return;

      var payload = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        company: form.company.value.trim(),
        phone: form.phone.value.trim(),
        industry: form.industry.value,
        message: form.message.value.trim(),
        _subject: 'FleetNexus Demo Request — ' + (form.company.value.trim() || form.name.value.trim()),
        _template: 'table',
        _captcha: 'false'
      };

      if (!payload.name || !payload.email) {
        statusEl.textContent = 'Please enter your name and email.';
        statusEl.className = 'demo-form__status is-error';
        return;
      }

      submitBtn.disabled = true;
      statusEl.textContent = 'Sending…';
      statusEl.className = 'demo-form__status';

      fetch('https://formsubmit.co/ajax/info@fleetnexus.me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (!result.ok) throw new Error((result.data && result.data.message) || 'Send failed');
          statusEl.textContent = 'Thanks — your demo request was sent. We’ll reply soon.';
          statusEl.className = 'demo-form__status is-success';
          form.reset();
          setTimeout(closeDemo, 1800);
        })
        .catch(function () {
          statusEl.textContent = 'Couldn’t send right now. Email us at info@fleetnexus.me.';
          statusEl.className = 'demo-form__status is-error';
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  /* —— Scroll reveal —— */
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('is-in');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -60px 0px' }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();
