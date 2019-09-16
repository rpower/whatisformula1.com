---
layout: page
title: Drivers
permalink: /drivers/
image: max-race-win
in-page-image: max-az-gp-grid
in-page-image-caption: Red Bull driver Max Verstappen ahead of the 2019 Azerbaijan Grand Prix
preview-text: Learn about the 20 drivers competing in the 2019 Formula 1 championship including Lewis Hamilton, the defending World Drivers' Champion, who is looking to win his 6th championship this year.
image-credit: Mark Thompson / Getty Images
order: 2
---

<div class="container">
  <div class="row align-middle">
    <div class="col-4">
      <strong>Driver</strong>
    </div>
    <div class="col">
      <strong>Team</strong>
    </div>
  </div>
  {% assign driver_number = 0 %}
  {% for driver in site.data.drivers %}
    {% assign value = driver_number | modulo: 2 %}
    {% if value == 0 %}
      <div class="row align-middle border-top py-1 mt-1">
    {% else %}
      <div class="row align-middle pb-1">
    {% endif %}
      <div class="col-6 col-sm-4">
         <img src="/assets/images/flag_placeholder.png" class="flag flag-{{ driver.country-code }}" /> <span class="pl-1">{{ driver.name }}</span>
      </div>
      <div class="col-6 col-sm-2">
        {{ driver.team }}
      </div>
      <div class="col-12 col-sm px-3 pb-1 small">
          {{ driver.description }}
      </div>
    </div>

  {% assign driver_number = driver_number | plus: 1 %}
  {% endfor %}
</div>
