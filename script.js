// JAW 2026 — dark mode toggle and mobile menu.
// Shared by every page on the site.

(function () {
    'use strict';

    // Dark mode toggle
    var themeToggle = document.getElementById('theme-toggle');
    var html = document.documentElement;

    var savedTheme = null;
    try { savedTheme = localStorage.getItem('theme'); } catch (e) { /* private browsing */ }

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-theme', 'dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            var newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            try { localStorage.setItem('theme', newTheme); } catch (e) { /* private browsing */ }
        });
    }

    // Mobile menu toggle
    var navToggle = document.getElementById('navToggle');
    var mobileMenu = document.getElementById('mobileMenu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
        });

        Array.prototype.forEach.call(mobileMenu.querySelectorAll('a'), function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
            });
        });
    }
}());

/* Talk abstract modal */
(function () {
    'use strict';
    var modal = document.getElementById('abstractModal');
    if (!modal) return;

    var elTitle = modal.querySelector('.abs-modal__title');
    var elMeta  = modal.querySelector('.abs-modal__meta');
    var elBody  = modal.querySelector('.abs-modal__body');
    var lastFocus = null;

    function openModal(sess) {
        var strong = sess.querySelector('strong');
        var meta   = sess.querySelector('.sched-meta');
        var data   = sess.querySelector('.abs-data');
        elTitle.textContent = strong ? strong.textContent : '';
        elMeta.textContent  = meta ? meta.textContent : '';
        elBody.innerHTML    = data ? data.innerHTML : '';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        var closeBtn = modal.querySelector('.abs-modal__close');
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocus) { lastFocus.focus(); lastFocus = null; }
    }

    Array.prototype.forEach.call(document.querySelectorAll('.abstract-btn'), function (btn) {
        btn.addEventListener('click', function () {
            lastFocus = btn;
            var sess = btn.closest ? btn.closest('.sched-sess') : btn.parentNode;
            openModal(sess);
        });
    });

    modal.addEventListener('click', function (e) {
        if (e.target.classList.contains('abs-modal__backdrop') ||
            e.target.classList.contains('abs-modal__close')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
}());
