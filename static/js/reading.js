var map = L.map('map', {
    crs: L.CRS.Simple
});

var bounds = [[-26.5,-25], [1021.5,1023]];
var image = L.imageOverlay('static/lib/images/readingMap.png', bounds).addTo(map);

map.fitBounds(bounds);

var icon = L.MakiMarkers.icon({icon: "alcohol-shop", color:"#0D3FFF", size: "1"});
L.marker([930, 670], {icon: icon}).addTo(map).bindPopup("Wine From Blue Mountain Vineyards");

var icon = L.MakiMarkers.icon({icon: "bakery", color:"#0D3FFF", size: "1"});
L.marker([860, 550], {icon: icon}).addTo(map).bindPopup("<img src='static/lib/images/bakery.jpg'>");

var icon = L.MakiMarkers.icon({icon: "bakery", color:"#0D3FFF", size: "1"});
L.marker([780, 240], {icon: icon}).addTo(map).bindPopup("<img src='static/lib/images/donuts.jpg'>");

var icon = L.MakiMarkers.icon({icon: "beer", color:"#0D3FFF", size: "1"});
L.marker([400, 700.2 ], {icon: icon}).addTo(map).bindPopup('Gastro Pub with Draft Beer from Many Pennsylvania Breweries');

var icon = L.MakiMarkers.icon({icon: "grocery", color:"#0D3FFF", size: "1"});
L.marker([200, 700], {icon: icon}).addTo(map).bindPopup("<img src='static/lib/images/produce.jpg'>");

var icon = L.MakiMarkers.icon({icon: "farm", color:"#0D3FFF", size: "1"});
L.marker([930, 470], {icon: icon}).addTo(map).bindPopup('Killer Carrot Juice!');

map.addControl( new L.Control.Compass() );