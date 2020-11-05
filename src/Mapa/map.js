var map = L.map('map').setView([6.248779, -75.566018], 12); // Medellin

var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

function popUpInfo(feature, layer) {
    
    if (feature.properties && feature.properties.nomb_mus) {
        layer.bindPopup("<b>"+feature.properties.nomb_mus+"</b><br>"+feature.properties.municipio+" ("+feature.properties.provincia+")");
       
    }
}
L.marker([6.248152, -75.621967]).addTo(Map);
L.geoJson(museos, {
    onEachFeature: popUpInfo
    }).addTo(map);