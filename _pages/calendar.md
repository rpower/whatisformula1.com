---
layout: page
title: Calendar
permalink: /calendar/
image: monaco-hairpin
image-alt-text: Multiple Formula 1 cars are navigating a tight hairpin at the Monaco Grand Prix
in-page-image: vettel-leads-canadian-gp
in-page-image-caption: Ferrari driver Sebastian Vettel leads the pack at the 2019 Canadian Grand Prix
in-page-image-alt-text: A Ferrari leads a train of 19 other Formula 1 cars around a chicane at the Canadian Grand Prix
preview-text: The 2019 Formula 1 season is contested over 21 Grand Prix held around the world. These include historic races such as the Monaco Grand Prix and the British Grand Prix but also new races such as...
image-credit: Dan Istitene / Getty Images
order: 4
---

{%- assign current_date = 'now' | date: '%s' -%}
{%- assign current_year = 'now' | date: '%Y ' -%}

{%- for race in site.data.races -%}
  {%- assign race_date = race.race-date | date: '%s' -%}
  {%- if race_date >= current_date -%}
    {%- assign next_race = current_year | append: race.name -%}
    {%- assign next_race_location = race.location -%}
    {%- assign next_race_day = race.race-date | date: '%-d' -%}
    {%- assign next_race_month = race.race-date | date: '%B' -%}
    {%- assign next_race_country_code = race.country-code -%}
    {%- break -%}
  {%- endif -%}
{%- endfor -%}

The 2019 Formula 1 season is contested over 21 Grand Prix held around the world. These include historic races such as the <img src="/assets/images/flag_placeholder.png" class="flag flag-mc ml-1 mb-2" /> <span class="pl-1 font-weight-bold">Monaco Grand Prix</span> and the <img src="/assets/images/flag_placeholder.png" class="flag flag-gb ml-1 mb-2" /> <span class="pl-1 font-weight-bold">British Grand Prix</span> but also new races such as the return of the <img src="/assets/images/flag_placeholder.png" class="flag flag-fr ml-1 mb-2" /> <span class="pl-1 font-weight-bold">French Grand Prix</span> which was reintroduced in 2018.

In the 2020 season, the number of races will increase with the introduction of the <img src="/assets/images/flag_placeholder.png" class="flag flag-nl ml-1 mb-2" /> <span class="pl-1 font-weight-bold">Dutch Grand Prix</span> and the <img src="/assets/images/flag_placeholder.png" class="flag flag-vn ml-1 mb-2" /> <span class="pl-1 font-weight-bold">Vietnam Grand Prix</span>.

<div class="alert alert-primary" role="alert">
The next race is the <img src="/assets/images/flag_placeholder.png" class="flag flag-{{ next_race_country_code }} ml-1 mb-2" /> <span class="pl-1 font-weight-bold">{{ next_race }}</span> held in <span class="font-weight-bold">{{ next_race_location }}</span> on the <span class="font-weight-bold">{%- case next_race_day -%}
  {%- when '1' or '21' or '31' -%}{{ next_race_day }}st
  {%- when '2' or '22' -%}{{ next_race_day }}nd
  {%- when '3' or '23' -%}{{ next_race_day }}rd
  {%- else -%}{{ next_race_day }}th
{%- endcase -%}&nbsp;of {{ next_race_month }}</span>.
</div>

Below is the full calendar of races for the 2019 Formula 1 season:

<div class="container">
  <div class="row pb-1 justify-content-center">
    <div class="col-8 col-sm-6 col-lg-4 border-bottom">
      <strong>Race</strong>
    </div>
    <div class="col-4 col-sm-4 col-lg-4 border-bottom">
      <strong>Date</strong>
    </div>
  </div>
  {%- for race in site.data.races -%}
    <div class="row py-1 justify-content-center">
      <div class="col-8 col-sm-6 col-lg-4">
        <img src="/assets/images/flag_placeholder.png" class="flag flag-{{ race.country-code }}" /> <span class="pl-1">{{ race.name }}</span>
      </div>
      <div class="col-4 col-sm-4 col-lg-4">
        {{ race.race-date | date: "%d %b" }}
      </div>
    </div>
  {%- endfor -%}
</div>
