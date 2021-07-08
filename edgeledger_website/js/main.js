// Initialize and add the map
function initMap() { 
  // Your location
  const loc = {lat: 50.11077986929107, lng: 8.548078656355296};
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 15,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map});
}