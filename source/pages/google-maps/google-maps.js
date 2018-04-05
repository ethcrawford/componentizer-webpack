// google-maps entry
import '../../../lib/reboot.styl';
import './google-maps.styl';

window.googleMapsOnLoad = function() {
  var uluru = {lat: -25.363, lng: 131.044};
  var kremlin = {lat: 55.752023, lng: 37.617499};
  var test = {lat: 22.396428, lng: 114.109497};
  var myOptions = {
        zoom: 18,
        center: kremlin
    }
  var myOptionsTwo = {
        zoom: 14,
        center: uluru
    }
  var myOptionsThree = {
        zoom: 4,
        center: test
    }
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var mapTwo = new google.maps.Map(document.getElementById('map-two'), myOptionsTwo);
  var mapThree = new google.maps.Map(document.getElementById('map-three'), myOptionsThree);

  var marker = new google.maps.Marker({
    position: kremlin,
    map: map
  });
};
