---
layout: post
title:  ""
image: "blog.jpg"
permalink: "/blog/"
---

<div class="list-group blog-index">
  {% for post in site.posts %}
    <a class="list-group-item" href="{{ post.url }}">
      {{ post.title }}
      <span class="badge">{{ post.date | date: '%B %d, %Y' }}</span>
    </a>
  {% endfor %}
</div>
