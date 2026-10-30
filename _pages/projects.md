---
layout: page
title: Projects
permalink: /projects/
description: Hardware, software, and research I have built, with the code, papers, and demos where they are public.
nav: true
nav_order: 4
---

<!-- pages/projects.md: one hairline row per project, ordered by importance -->

{% assign sorted_projects = site.projects | sort: "importance" %}

<ul class="project-list">
  {% for project in sorted_projects %}
    <li>
      <a class="project-row{% unless project.img %} no-image{% endunless %}" href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}">
        {% if project.img %}
          {% include figure.liquid loading="lazy" path=project.img sizes="(min-width: 576px) 280px, 100vw" alt="" class="project-image" %}
        {% endif %}
        <div class="project-text">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>
