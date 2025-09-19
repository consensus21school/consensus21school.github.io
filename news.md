---
layout: default
title: News
permalink: /news/
---

# Consensus21 News

<div class="news-grid">
  {% for post in site.posts %}
    <div class="news-card">
      {% if post.image %}
        <div class="news-thumb">
          <a href="{{ post.url | relative_url }}">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
          </a>
        </div>
      {% endif %}
      <div class="news-content">
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        <p class="news-meta">{{ post.date | date: "%B %d, %Y" }} • {{ post.categories | join: ", " }}</p>
        <p>{{ post.excerpt }}</p>
        <a class="read-more" href="{{ post.url | relative_url }}">Read more →</a>
      </div>
    </div>
  {% endfor %}
</div>
