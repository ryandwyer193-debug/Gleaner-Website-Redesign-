(function () {
  var mobile = window.matchMedia('(max-width: 1099px)');
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('main-nav');

  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // On small screens, tapping a parent item expands or collapses its submenu
  var parents = document.querySelectorAll('.has-sub > a');
  for (var i = 0; i < parents.length; i++) {
    parents[i].addEventListener('click', function (e) {
      if (!mobile.matches) return;
      e.preventDefault();
      var li = this.parentNode;
      var open = li.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Newsletter form: show a confirmation instead of reloading
  var form = document.getElementById('news-form');
  var msg = document.getElementById('form-msg');
  if (form && msg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.textContent = 'Thanks for subscribing. Check your inbox to confirm.';
      form.reset();
    });
  }
})();
