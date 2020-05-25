function initMap() {
  const github = {
    lat: 37.782293,
    lng: -122.39124,
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: github,
    scrollwheel: false,
    zoom: 18,
  });

  const marker = new google.maps.Marker({
    position: github,
    map: map,
    title: 'GitHub',
  });
}
