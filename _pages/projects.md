---
layout: page
title: Projects
permalink: /projects/
---

### Tutorials

Some tutorials I've created while being a teaching assistant for various courses:

<div class="row pubitem">
    <div class="col-sm-12 mb-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title mt-1">A Gentle Introduction to PyTorch</h5>
                <h6 class="card-subtitle mt-1 mb-2 text-muted">DS 207 - Introduction to NLP, February 2025 @ Indian Institute of Science</h6>
                <p class="card-text">A beginner friendly, high-level overview of why and how to PyTorch.</p>
                <a href="/tutorials/docs/pytorch.html" class="btn link btn-sm z-depth-0">
                    <i class="bi bi-file-earmark-slides"></i> Slides
                </a>
                <span>/</span>
                <a href="https://github.com/kinshuk-h/tutorials/blob/main/pytorch.ipynb" class="btn link btn-sm z-depth-0">
                    <i class="bi bi-github"></i> Notebook
                </a>
                <span>/</span>
                <a href="https://danishpruthi.com/teaching/ds-207-jan-2025" class="btn link btn-sm z-depth-0">
                    <i class="bi bi-globe"></i> Course Page
                </a>
            </div>
        </div>
    </div>
</div>

### Select Projects

Some projects I've enjoyed working on:

<div class="row pubitem">
    {%for project in site.data.projects %}
        {% include projitem.liquid project=project %}
    {%endfor%}
</div>