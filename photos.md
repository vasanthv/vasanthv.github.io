---
layout: page
title: Photos
permalink: /photos/
description: A few photos I've taken.
styles:
  - /assets/css/photos.css
---

{% assign photo_posts = site.tags.photo | where_exp: "post", "post.photo" | sort: "date" | reverse %}

<div class="gallery">
  {% for post in photo_posts %}
  <button class="gallery__tile" type="button" data-index="{{ forloop.index0 }}" aria-label="Open photo {{ forloop.index }} of {{ photo_posts.size }}">
    <img src="{{ post.photo | relative_url }}" alt="{{ post.title }}" loading="lazy" decoding="async">
  </button>
  {% endfor %}
</div>

<dialog class="lightbox" aria-label="Photo viewer">
  <figure class="lightbox__figure">
    <img class="lightbox__img" alt="">
    <figcaption class="lightbox__caption" aria-live="polite"></figcaption>
  </figure>

  <button class="lightbox__btn lightbox__btn--close" type="button" aria-label="Close">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
  </button>
  <button class="lightbox__btn lightbox__btn--prev" type="button" aria-label="Previous photo">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
  </button>
  <button class="lightbox__btn lightbox__btn--next" type="button" aria-label="Next photo">
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
  </button>
</dialog>

<script>
  (function () {
    var photos = [
      {% for post in photo_posts %}{ src: {{ post.photo | relative_url | jsonify }}, alt: {{ post.title | default: "" | jsonify }}, url: {{ post.url | relative_url | jsonify }} }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ];
    if (!photos.length) return;

    var dialog = document.querySelector('.lightbox');
    var img = dialog.querySelector('.lightbox__img');
    var caption = dialog.querySelector('.lightbox__caption');
    var index = 0;

    var show = function (i) {
      index = (i + photos.length) % photos.length;
      img.src = photos[index].src;
      img.alt = photos[index].alt;
      var link = document.createElement('a');
      link.href = photos[index].url;
      link.textContent = photos[index].alt || (index + 1) + ' / ' + photos.length;
      caption.replaceChildren(link);
      [index + 1, index - 1].forEach(function (n) {
        new Image().src = photos[(n + photos.length) % photos.length].src;
      });
    };

    document.querySelectorAll('.gallery__tile').forEach(function (tile) {
      tile.addEventListener('click', function () {
        show(Number(tile.dataset.index));
        dialog.showModal();
      });
    });

    dialog.querySelector('.lightbox__btn--close').addEventListener('click', function () {
      dialog.close();
    });
    dialog.querySelector('.lightbox__btn--prev').addEventListener('click', function () {
      show(index - 1);
    });
    dialog.querySelector('.lightbox__btn--next').addEventListener('click', function () {
      show(index + 1);
    });

    dialog.addEventListener('click', function (e) {
      if (e.target === dialog || e.target.classList.contains('lightbox__figure')) dialog.close();
    });

    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
      if (e.key === 'Escape') { e.preventDefault(); dialog.close(); }
    });

    dialog.addEventListener('close', function () {
      var tile = document.querySelector('.gallery__tile[data-index="' + index + '"]');
      if (tile) tile.focus();
    });
  })();
</script>
