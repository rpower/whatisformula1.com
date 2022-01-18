var documents = [{
    "id": 0,
    "url": "https://www.whatisformula1.com/404.html",
    "title": "404",
    "body": "This page does not exist, either return to the homepage or click on any of the links below! "},{
    "id": 1,
    "url": "https://www.whatisformula1.com/calendar/",
    "title": "Calendar",
    "body": "The 2022 Formula 1 season will feature 23 races including the new Miami Grand Prix and the returning Singapore Grand Prix. The next race is the {{ next_race }} held in on the . Below is the calendar of races that have been confirmed so far for the 2022 Formula 1 season:       Race       Date    {%- for race in site. data. races -%}          {{ race. name }}          {{ race. race-date | date:  %d %b  }}      {%- endfor -%}"},{
    "id": 2,
    "url": "https://www.whatisformula1.com/contact/",
    "title": "Contact",
    "body": "For all enquires, please email contact@whatisformula1. com. "},{
    "id": 3,
    "url": "https://www.whatisformula1.com/drivers/",
    "title": "Drivers",
    "body": "      Driver       Team    {%- assign driver_number = 0 -%} {%- for driver in site. data. drivers -%}  {%- assign value = driver_number | modulo: 2 -%}  {%- if value == 0 -%}     {%- else -%}     {%- endif -%}        {{ driver. name }}          {{ driver. team }}         {%- assign driver_number = driver_number | plus: 1 -%} {%- endfor -%}"},{
    "id": 4,
    "url": "https://www.whatisformula1.com/history/",
    "title": "History",
    "body": "Following World War II, a series of rules was established that all participating cars must conform to. These rules are called the formula. In 1946, Formula One was the introduced after World War II and the Turin Grand Prix, the first non-championship race was held later that same year. It wasn’t until 1950 when the first world championship race was held at Silverstone in the UK. Silverstone continues to hold the British Grand Prix in modern-day Formula 1. In 1958, the constructors championship was introduced. At Silverstone, Italian driver Giuseppe Farina won the first world championship race in his Alfa Romeo. Farina would go on to win the first Drivers’ World Championship ahead of his Alfa Romeo teammate, Juan Manuel Fangio. The following year in 1951, Fangio would go on to win the second Drivers’ World Championship and then four more in 1954, 1955, 1956, and 1957. With 5 World Championships, Fangio still has the joint-second most championships alongside Lewis Hamilton and behind Michael Schumacher, who won 7 championships. The 50s were a tumultuous time for Formula One, in the 1952 and 1953 seasons, the championship were held to Formula Two regulations due to the lack of teams entering as a result of rising costs. The oldest team is Ferrari as they are the only team still-competing to have competed in the debut 1950 season. From the late-50s and early-60s, teams began to make technological improvements to the cars they entered. Starting with Mike Hawthorn’s championship win in 1958, British drivers went on to win 9 Drivers’ World Championships between them, and British teams went on to win 10 Constructors’ World Championships between 1962 and 1973. Formula One drivers continued to put their lives at risk competing and British driver Jackie Stewart retired ahead of the final race of the 1973 World Championship following the death of fellow team mate Francois Cevert. Two years later, Emerson Fittipaldi refused to compete in the 1975 Spanish Grand Prix which stopped when a car crashed and killed five spectators. Jackie Stewart would go on to become a fervent advocate for increased safety within the sport:  “If I have any legacy to leave the sport I hope it will be seen to be an area of safety because when I arrived in Grand Prix racing so-called precautions and safety measures were diabolical. ” In the 90s, McLaren and Williams were the two dominant constructors. McLaren won 9 Drivers’ Championships and 7 Constructors’ Championships in that time with their drivers Ayrton Senna and Alain Prost. Senna and Prost had a close and intense rivalry until 1993 when Prost retired. The following year, Senna died at the 1994 San Marino Grand Prix after crashing. That same weekend Austrian driver Roland Ratzenberger also died following an accident during the qualifying session on the Saturday. Further rule changes were introduced with a focus on safety by the FIA (Fédération Internationale de l’Automobile), Formula 1’s governing body. Between 1984 and 2008, four teams, out of those who competed, Ferrari, Williams, McLaren and Renault went on to win every World Championship. The increasing cost of competing in Formula One a gap between the top teams and everyone else began to emerge. Ferrari driver Michael Schumacher dominated the late-90s winning 6 consecutive Drivers’ World Championships between 1999 and 2004 (in addition to 5 consecutive Constructors’ World Championships for Ferrari during the same time). Since then, rules and regulations for Formula 1 entrants continued to evolve to encourage more competitive races and improve safety on-track. Formula 1 continued to expand worldwide and in 2022 will compete in 23 different countries around the world. "},{
    "id": 5,
    "url": "https://www.whatisformula1.com/",
    "title": "Home",
    "body": "{%- if page. url == “/” -%}       When is the next race?:       {%- include nextrace. html -%}        What is FORMULA 1?:       {%- include homepagesummary. html -%}  {%- endif -%} "},{
    "id": 6,
    "url": "https://www.whatisformula1.com/pitstops/",
    "title": "Pit Stops",
    "body": "Pit stops occur when a car returns to the ‘pit lane’, which is runs parallel to the start-finish straight. In each race, every car is obliged to make at least one pit stop. During each pit stop, the driver waits in the vehicle and up to 20 mechanics (known as the ‘pit crew’) make various repairs and modifications to the car. The Formula 1 regulations stipulate that in each race, every car must use two of the three ‘compounds’ of tyres. They therefore must make at least pit stop to change from one compound to another. These different tyre compounds have different coloured markings on the side of the tyre for spectators to differentiate between them. During a ‘wet race’, these rules are relaxed as drivers are no longer obliged to race using two different type compounds. Instead they race using either the ‘full wet’ tyres, during the rain, or the ‘intermediate’ tyres, during changeable conditions. Incidents and accidents during the race may require a team to make repairs to a car mid-race. For example, the front wing of the car may have to be replaced if it’s damaged. In the past, teams were also able to refuel their cars during a pit stop, however 2009 was the last season where this was an option to teams. One pit crew can only perform a pit stop on one car at a time, so teams must be careful to time the pit stops for their two drivers such that they do not clash. Sometimes teams will have their second car queue behind the first and perform two pit stops back to back. However this is a risky strategy because it puts pressure on the pit crews and introduces room for error. This is called ‘double stacking’ their pit stops. Another strategy teams will employ when battling one of their rival teams is to bring one of their drivers in to replace their old, worn tyres with new tyres. Their driver, on better tyres than their rivals, aims to then gain on their rivals so that when their rivals make their pit stop, they end up behind them. This is called the ‘undercut’. Pit crew mechanics can change a tyre in seconds, however making a pit stop is not an easy decision. This is because cars must drive through the pit lane at reduced speeds for safety reasons. This means that a pit stop can take at least 20-30 seconds depending on the track. As a result, when to make a pit stop is an important strategic decision a team must make. The position of rivals, position of their teammate, weather conditions, any damage to the car, tyre wear and other factors are all considerations to take into account when decide when to pit their drivers. "},{
    "id": 7,
    "url": "https://www.whatisformula1.com/rules/",
    "title": "Rules",
    "body": "Each race weekend, which is also known as a Grand Prix, teams, along with their two drivers, aim to earn as many championship points as possible. At the end of the season, the team with the most points from their drivers will be awarded the Constructors Championship and the individual driver with the most points will earn the Drivers Championship. Lewis Hamilton is the reigning Drivers Champion, and the team he races for, Mercedes, are the reigning Constructors Championship. The Formula 1 season is competed across 23 races around the world, so a team (and their drivers) will have to perform as well as they can, as consistently as they can, for almost 10 months across these 21 races to earn as many points as they can in each Grand Prix to maximise their chances of winning the Championship. Each Grand Prix takes place over a weekend with the following schedule:  Two practice sessions on a Friday One practice session followed by a Qualifying session on a Saturday The race is on a SundayThe practice sessions are used by teams to understand how their cars (and their drivers) are performing on a particular track. The teams have the opportunity to make a certain (limited) number of changes to their car throughout the weekend. The Qualifying session, which lasts around 90 minutes, is used to determine which order (or ‘position’) the cars will start the race on Sunday in. In the Qualifying session, drivers will attempt to set the fastest lap they can. Those who set the fastest lap earn a higher position on the starting grid with each driver aiming to make it as close as possible to the number 1 position (also known as ‘pole position’ or ‘pole’). This session is split into 3 parts (named ‘Q1’, ‘Q2’ and ‘Q3’) where in each session, the slowest 5 drivers will be knocked out (with their position determined by what order they finish at the end of each Qualifying session). In Q1, 20 drivers are reduced to 15 drivers, and in Q2 15 drivers are whittled down to 10 drivers. In the final session, Q3, the top 10 fastest drivers compete for the front 10 positions on the starting grid. Having a better position on the starting grid can confer a large advantage because drivers will make it as difficult as possible for competitors to overtake them. The race on Sunday is the most important part of the weekend, as no Championship points are awarded in any session outside of the race. Drivers line up on the starting grid in the order they qualified in (however on occasion, teams or drivers will incur penalties which may demote them to a lower grid position) and then when the race begins they will compete to complete a set number of laps (which varies depending on the track) as quickly as they can. The race usually lasts around 2 hours baring an incidents which temporarily stop the race midway. During the race, each driver is obligated to make a ‘pit-stop’ and change the type of tyres they have on their car. A pit-stop involves driving to a special area of the track (also known as the ‘pit-lane’) where their team’s mechanics will meet them and change their tyres as quickly as possible (on occasion the mechanics will be required to make other limited changes to the car, for example if part of the car is damaged, however this is also very costly in terms of time). Each team will try to make pit-stops as quickly as possible because each second counts. Making a pit-stop can cost a driver up to 30 seconds (because the drivers are obligated to drive slowly through the pit-lane in the name of safety) and the time it takes to actually change the tyre takes time. The record for the fastest tyre change is 1. 9 seconds. This introduces a level of strategy into the race because although teams have to make a pit-stop, when they make their pit-stop is at their discretion. Teams will try to optimise their strategy by choosing to make a pit-stop at the most opportune time. Factors such as the weather, damage to the car and other teams’ strategies will affect their decision. Drivers (and the teams they drive for) who finish in the top 10 will earn points (with more points being awarded to those who finish higher). Teams then repeat this for the 21 Grand Prix on the Formula 1 calendar. "},{
    "id": 8,
    "url": "https://www.whatisformula1.com/teams/",
    "title": "Teams",
    "body": "      Team       Engine manufacturer       Drivers    {%- for team in site. data. teams -%}           {{ team. name }}          {{ team. engine }}                     {%- assign driver_number = 0 -%}      {%- for driver in site. data. drivers -%}       {%- if driver. team == team. name -%}       {%- assign value = driver_number | modulo: 2 -%}       {%- if value == 0 -%}               {%- else -%}               {%- endif -%}        {{ driver. name }}               {%- endif -%}       {%- assign driver_number = driver_number | plus: 1 -%}      {%- endfor -%}               {%- endfor -%}"},{
    "id": 9,
    "url": "https://www.whatisformula1.com/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ &#8220;sitemap. xml&#8221;   absolute_url }}   "},];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});