---
layout: page
title: Calendar
permalink: /calendar/
image-main: monaco-hairpin
image-alt-text: Multiple Formula 1 cars are navigating a tight hairpin at the Monaco Grand Prix
in-page-image: vettel-leads-canadian-gp
in-page-image-caption: Ferrari driver Sebastian Vettel leads the pack at the 2019 Canadian Grand Prix
in-page-image-alt-text: A Ferrari leads a train of 19 other Formula 1 cars around a chicane at the Canadian Grand Prix
preview-text: The 2023 Formula 1 season is contested over 23 Grand Prix held around the world. These include historic races such as the Monaco Grand Prix and the British Grand Prix but also new races such as...
image-credit: Dan Istitene / Getty Images
order: 4
---

The 2023 Formula 1 season will feature 24 races including the new <img src="/assets/images/flag_placeholder.png" class="flag flag-us ml-1 mb-2" /> <span class="pl-1 font-weight-bold">Las Vegas Grand Prix</span> and the returning <img src="/assets/images/flag_placeholder.png" class="flag flag-cn ml-1 mb-2" /> <span class="pl-1 font-weight-bold">Chinese Grand Prix</span>.

<div class="alert alert-primary" role="alert">
The next race is the <img src="/assets/images/flag_placeholder.png" class="flag ml-1 mb-2" id="nextraceimg" /> <span class="pl-1 font-weight-bold" id="nextracename">{{ next_race }}</span> held in <span class="font-weight-bold" id="nextracelocation"></span> on the <span class="font-weight-bold" id="nextracedate"></span>.
</div>

<script>
  var races = [
    {% for race in site.data.races %}
      {
        'name': '{{ race.name }}',
        'date': '{{ race.race-date }}',
        'countryCode': '{{ race.country-code }}',
        'location': '{{ race.location }}',
        'dateFormatted': '{{ race.date-formatted }}'
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
  var currentDate = new Date;
  var nextRaceName = '';
  var nextRaceCode = '';
  for (i = 0; i < races.length; i++) {
    nextDate = races[i]['date'];
    if (new Date(races[i]['date']) >= currentDate) {
        nextRaceName = races[i]['name'];
        nextRaceCode = races[i]['countryCode'];
        nextRaceLocation = races[i]['location'];
        nextRaceDate = races[i]['dateFormatted'];
        break;
    } else {
        nextRaceName = races[0]['name'];
        nextRaceCode = races[0]['countryCode'];
        nextRaceLocation = races[0]['location'];
        nextRaceDate = races[0]['dateFormatted'];
    }
  }
  document.querySelector('#nextracename').innerHTML = nextRaceName;
  document.querySelector('#nextraceimg').className += ' flag-' + nextRaceCode;
  document.querySelector('#nextracelocation').innerHTML = nextRaceLocation;
  document.querySelector('#nextracedate').innerHTML = nextRaceDate;
</script>

Below is the calendar of races that have been confirmed so far for the 2023 Formula 1 season:

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
