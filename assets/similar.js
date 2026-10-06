/* Marshall Goldman — Similar Vehicles carousel (VDP)
 *
 * MGSimilar.mount(target, options)
 *   options  { variant: 'bottom' | 'sold', position: 'beforebegin' | 'afterend' | ...,
 *              kicker, title, make, ctaHref, cars: [{ name, price, href, img, location, mileage }] }
 *
 * Controls: a counter ("1–4 / 6") with bare chevrons. Sold variant: the
 * "See all <make> in stock" link sits in the head row beside them.
 * Bottom variant: a progress rail under the track.
 */
(function () {
  var CHL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg>';
  var CHR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M9.5 5.5L16 12l-6.5 6.5"/></svg>';
  var ARR = '<svg viewBox="0 0 32 12" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M0 6h30M25 1l5 5-5 5"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function card(c) {
    var meta = '<ul class="mg-sim__meta"><li><span>Mileage:</span>' + esc(c.mileage) + '</li><li><span>Location:</span>' + esc(c.location) + '</li></ul>';
    var price = '<p class="mg-sim__price">' + esc(c.price) + '</p>';
    return '<li class="mg-sim__card"><a class="mg-sim__link" href="' + esc(c.href) + '">' +
      '<div class="mg-sim__img"><img src="' + esc(c.img) + '" alt="' + esc(c.name) + '"></div>' +
      '<div class="mg-sim__body">' +
        '<h3 class="mg-sim__name">' + esc(c.name) + '</h3>' +
        '<div class="mg-sim__row">' + price + meta + '</div>' +
        '<span class="mg-sim__view">View Details</span>' +
      '</div></a></li>';
  }

  // The live marshallgoldman.com SRP card (.car-card), reproduced as-is.
  function srpCard(c) {
    return '<li class="mg-sim__card mg-srp"><a class="mg-srp__img" href="' + esc(c.href) + '"><img src="' + esc(c.img) + '" alt="' + esc(c.name) + '"></a>' +
      '<div class="mg-srp__body">' +
        '<h2 class="mg-srp__title"><a href="' + esc(c.href) + '">' + esc(c.title || c.name) + '</a></h2>' +
        '<h3 class="mg-srp__price">Price: ' + esc(c.price) + '</h3>' +
        '<ul class="mg-srp__specs"><li><span>Exterior:</span>' + esc(c.exterior) + '</li><li><span>Interior:</span>' + esc(c.interior) + '</li><li><span>Mileage:</span>' + esc(c.mileage) + '</li></ul>' +
        '<ul class="mg-srp__stock"><li><span>Stock:</span> ' + esc(c.stock) + '</li><li><span>Location:</span> ' + esc(c.location) + '</li></ul>' +
        '<div class="mg-srp__btns"><a href="#">Inquire</a>' +
          '<a class="mg-srp__call" href="tel:' + esc(c.phone) + '" title="Call ' + esc(c.phone) + '" aria-label="Call ' + esc(c.location) + ' ' + esc(c.phone) + '"><img src="assets/img/Call.svg" alt=""></a>' +
          '<a href="' + esc(c.href) + '">View Details</a></div>' +
      '</div></li>';
  }

  function mount(target, o) {
    var sold = o.variant === 'sold';
    var id = 'mg-sim-' + Math.random().toString(36).slice(2, 7);
    var nav = '<div class="mg-sim__nav">' +
      '<span class="mg-sim__count" aria-live="polite"></span>' +
      '<button class="mg-sim__arrow" data-dir="-1" aria-label="Previous vehicles" aria-controls="' + id + '">' + CHL + '</button>' +
      '<button class="mg-sim__arrow" data-dir="1" aria-label="Next vehicles" aria-controls="' + id + '">' + CHR + '</button></div>';
    var rail = '<div class="mg-sim__rail" aria-hidden="true"><i></i></div>';
    var cta = sold && o.ctaHref ? '<a class="mg-sim__cta" href="' + esc(o.ctaHref) + '"><span>See all ' + esc(o.make) + ' in stock</span>' + ARR + '</a>' : '';

    var html = '<section class="mg-sim mg-sim--' + (sold ? 'sold' : 'bottom') + '" aria-labelledby="' + id + '-t">' +
      '<div class="mg-sim__inner">' +
        '<div class="mg-sim__head"><div>' +
          '<span class="mg-sim__kicker">' + esc(o.kicker) + '</span>' +
          '<h2 class="mg-sim__title" id="' + id + '-t">' + esc(o.title) + '</h2>' +
        '</div>' + (sold ? '<div class="mg-sim__actions">' + cta + nav + '</div>' : '') + '</div>' +
        '<ul class="mg-sim__track" id="' + id + '" data-lenis-prevent>' + o.cars.map(sold ? card : srpCard).join('') + '</ul>' +
        (sold ? '' : '<div class="mg-sim__foot">' + rail + nav + '</div>') +
      '</div></section>';

    target.insertAdjacentHTML(o.position || 'afterend', html);
    var root = document.getElementById(id).closest('.mg-sim');
    var track = root.querySelector('.mg-sim__track');
    var cards = track.querySelectorAll('.mg-sim__card');
    var btns = root.querySelectorAll('.mg-sim__arrow');
    var count = root.querySelector('.mg-sim__count');
    var thumb = root.querySelector('.mg-sim__rail i');

    function step() { return cards[0] ? cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : 0; }
    function sync() {
      var max = track.scrollWidth - track.clientWidth;
      var s = step() || 1;
      var first = Math.round(track.scrollLeft / s) + 1;
      var gap = parseFloat(getComputedStyle(track).columnGap || 0);
      var shown = Math.max(1, Math.floor((track.clientWidth + gap + 2) / s));
      var last = Math.min(cards.length, first + shown - 1);
      count.innerHTML = '<b>' + (first === last ? first : first + '–' + last) + '</b> / ' + cards.length;
      btns[0].disabled = track.scrollLeft <= 2;
      btns[1].disabled = track.scrollLeft >= max - 2;
      if (thumb) {
        var w = track.clientWidth / track.scrollWidth;
        thumb.style.width = (w * 100) + '%';
        thumb.style.transform = 'translateX(' + (max > 0 ? (track.scrollLeft / max) * ((1 - w) / w) * 100 : 0) + '%)';
      }
    }
    btns.forEach(function (b) {
      b.addEventListener('click', function () { track.scrollBy({ left: step() * +b.dataset.dir, behavior: 'smooth' }); });
    });
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
    return root;
  }

  window.MGSimilar = { mount: mount };
})();
