import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZSource from 'ol/source/xyz';
import proj from 'ol/proj';
import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import Feature from 'ol/feature';
import Point from 'ol/geom/point';
import Style from 'ol/style/style';
import IconStyle from 'ol/style/icon';
import Overlay from 'ol/overlay';
import coordinate from 'ol/coordinate';
import GeoJSON from 'ol/format/geojson';
import sync from 'ol-hashed';
import DragDrop from 'ol/interaction/draganddrop';

const map = new Map({
  target: 'map-container',
  layers: [
    new TileLayer({
      source: new XYZSource({
        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
      })
    }),
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/countries.json'
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});


// Empty data source for user'imports
const source = new VectorSource();
const layer = new VectorLayer({
  source: source
});
map.addLayer(layer);

map.addInteraction(new DragDrop({
  source: source,
  formatConstructors: [GeoJSON]
}));


// Position Marker
const position = new VectorSource();
const vector = new VectorLayer({
  source: position
});
map.addLayer(vector);

vector.setStyle(new Style({
  image: new IconStyle({
    src: './data/marker.png'
  })
}));

navigator.geolocation.getCurrentPosition(function (pos) {
  const coords = proj.fromLonLat([pos.coords.longitude, pos.coords.latitude]);
  map.getView().animate({
    center: coords,
    zoom: 11
  });
  position.addFeature(new Feature(new Point(coords)));
});


// Popup initialization
/*var overlay = new Overlay({
  element: document.getElementById('popup-container'),
  positioning: 'bottom-center',
  offset: [0, -10]
});
map.addOverlay(overlay);*/

// Popup content
/*map.on('click', function (e) {
  overlay.setPosition();
  var features = map.getFeaturesAtPixel(e.pixel);
  if (features) {
    var coords = features[0].getGeometry().getCoordinates();
    var hdms = coordinate.toStringHDMS(proj.toLonLat(coords));
    overlay.getElement().innerHTML = 'You are here : ' + hdms;
    overlay.setPosition(coords);
  }
});*/


// Hashed URL
sync(map);