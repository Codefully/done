---
layout: post
title:  ""
image: "blog.jpg"
permalink: "/blog/"
---

<ul class="list-group blog-index">
  {% for post in site.posts %}
    <li class="list-group-item">
      <strong class="title">{{ post.title }}</strong>
      <span class="badge hidden-xs">{{ post.date | date: '%B %d, %Y' }}</span>
      <div class="excerpt">{{ post.excerpt }}</div>
      <a href="{{ post.url }}" class="btn btn-primary">Διαβάστε τη συνέχεια...</a>
    </li>
  {% endfor %}
</ul>
