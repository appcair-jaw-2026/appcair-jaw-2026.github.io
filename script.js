// JAW 2026 — dark mode toggle and mobile menu.
// Same behaviour as the CAISc 2026 site, moved into a shared file so every
// page picks it up.

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
