window.createMap = (placeId, latitude, longitude, name) => {
    var map = L.map('map-' + placeId).setView([latitude, longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© Ucare'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('<b>' + name + '</b><br>Latitude: ' + latitude + '<br>Longitude: ' + longitude)
        .openPopup();
};
