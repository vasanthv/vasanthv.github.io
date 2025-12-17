---
layout: default
title: Home
---

# Articles

<ul>
{% assign sorted = site.articles | sort: "order" %}
{% for article in sorted %}
    <li>
  <a href="{{ article.url }}">{{ article.title }}</a>
    </li>
{% endfor %}
</ul>
