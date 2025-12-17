---
layout: default
title: Home
---

Hello, I am **Vasanth**. Welcome to my corner of the internet - a place where I write junk, chase random thoughts, and try to make sense of my chaotically organized brain. Keeping things simple & stupid.

<ul>
{% assign sorted = site.articles | sort: "order" | reverse %}
{% for article in sorted %}
    <li>
  <a href="{{ article.url }}">{{ article.title }}</a>
    </li>
{% endfor %}
</ul>
