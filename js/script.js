var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  var mapOptions = {
    zoom: 16,
    center: {lat: 59.939116, lng: 30.322412},
    disableDefaultUI: true
  }

  var map = new google.maps.Map(document.querySelector('.contacts__map'), mapOptions);
  var image = "img/icon-map-pin.svg";
  var myLatLng = new google.maps.LatLng(59.939116, 30.322412);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    animation: google.maps.Animation.DROP
  });
}
