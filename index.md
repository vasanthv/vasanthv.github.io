---
layout: default
title: Home
---

Hello, I am **Vasanth**. I live in Barrie, Canada.

Welcome to my corner of the internet - a place where I write junk, chase random thoughts, and try to make sense of my chaotically organized brain.

Keeping things simple & stupid.

<ul id="list">
{% assign sorted = site.articles | sort: "date" | reverse %}
{% for article in sorted %}
    <li>
  <a href="{{ article.url }}">{{ article.title }}</a><span>{{ article.date | date: "%b %d, %Y" }}</span>
    </li>
{% endfor %}
</ul>
