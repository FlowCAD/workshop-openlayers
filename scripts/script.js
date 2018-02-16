var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([1.4407, 43.5974]),
        zoom: 13
    }),
    controls: ol.control.defaults({
        attributionOptions: {
            collapsible: false
        }
    })
});