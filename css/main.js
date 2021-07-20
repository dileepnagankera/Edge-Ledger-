// Initialize and add the map
function initmap() {
  //Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  //Centered map on location
  const map = new google.maps.map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.marker({ position: loc, map: map });
}
@media (min-width: 1100px) {
  #what .items .item {
    display: flex;
    text-align: left;
  }

  #what .items .item i {
    margin-right: 1.3rem;
    align-self: center;
    margin-bottom: 0;
  }

  #contact .map {
    flex: 2;
  }
}

@media (min-width: 768px) {
  #what .items {
    display: block;
    padding: 1rem;
  }

  /* Align icon to left */

  #what .items .item {
    display: flex;
    text-align: left;
  }

  #what .items .item i {
    margin-right: 1.3rem;
    align-self: center;
    margin-bottom: 0;
  }
}