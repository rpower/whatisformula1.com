---
layout: page
title: Teams
permalink: /teams/
image: ferrari-us-gp
image-alt-text: The red Ferrari car travelling through the turns in a race
in-page-image: nico-german-gp
in-page-image-caption: Renault driver Nico Hulkenberg driving in the rain during a wet 2019 German Grand Prix
in-page-image-alt-text: A yellow Renault car in the foreground leads multiple other Formula 1 cars in a rainy race
preview-text: Find out more about the 10 teams competing for the World Constructors' Championship. Mercedes are the reigning champions, and they face fierce competition from the likes of Ferrari and Red Bull.
image-credit:  XPB / James Moy Photography
order: 3
---

<div class="container">
  <div class="row">
    <div class="col-6 col-sm-6 col-md-3 col-lg-2 mt-auto">
      <strong>Team</strong>
    </div>
    <div class="col col-sm-6 col-md-3 col-lg-2 mt-auto">
      <strong>Engine manufacturer</strong>
    </div>
    <div class="col-12 col-sm-12 col-md col-lg-3 mt-auto d-none d-sm-none d-md-block">
      <strong>Drivers</strong>
    </div>
    <div class="col-12 mt-auto col-sm-12 col-md-12 col-lg px-3 pb-1 d-none d-sm-none d-md-none d-lg-block">

    </div>
  </div>
  {%- for team in site.data.teams -%}
      <div class="row align-middle border-top py-1 mt-1">
      <div class="col-6 col-sm-6 col-md-3 col-lg-2">
         <img src="/assets/images/flag_placeholder.png" class="flag flag-{{ team.country-code }}" /> <span class="pl-1">{{ team.name }}</span>
      </div>
      <div class="col col-sm-3 col-md-3 col-lg-2 px-3 pb-1">
        {{ team.engine }}
      </div>
      <div class="col-12 col-sm-12 col-md col-lg-3 pl-0">
        <div class="container">
          <div class="row">
            {%- assign driver_number = 0 -%}
            {%- for driver in site.data.drivers -%}

              {%- if driver.team == team.name -%}
              {%- assign value = driver_number | modulo: 2 -%}
              {%- if value == 0 -%}
                <div class="col col-lg-12">
              {%- else -%}
                <div class="col col-lg-12 ml-3 ml-md-0">
              {%- endif -%}
                  {{ driver.name }}
                </div>
              {%- endif -%}
              {%- assign driver_number = driver_number | plus: 1 -%}
            {%- endfor -%}
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg px-3 pb-1 small">
        {{ team.description }}
      </div>
    </div>

  {%- endfor -%}
</div>
