---
layout: page
title: Vasanth.V
show_title: false
description: Personal site and blog of Vasanth.
---

Welcome to my corner of the internet - a place where I write junk, chase random thoughts, and try to make sense of my chaotically organized brain.

I am currently living in _Barrie, Canada_. I'm a software engineer by profession, and in my free time, I like to tinker with silly little software projects. You can find some of my work on [GitHub](https://github.com/vasanthv){:target='\_blank'}

{% if site.posts.size > 0 %}

<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-list__item">
    <a class="post-list__link" href="{{ post.url | relative_url }}">
      <span class="post-list__title">{{ post.title }}</span><time class="post-list__date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
    </a>
  </li>
  {% endfor %}
</ul>
{% endif %}
