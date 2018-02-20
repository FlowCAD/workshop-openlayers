var source = new ol.source.Vector({
    url: '/data/7day-M2.5.json',
    format: new ol.format.GeoJSON()
});

var styleBasic = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({
            color: 'blue'
        }),
        stroke: new ol.style.Stroke({
            color: 'white'
        })
    })
});

var styleSelected = new ol.style.Style({
    image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({
            color: 'cyan'
        }),
        stroke: new ol.style.Stroke({
            color: 'white'
        })
    })
});

// Draw Feature
/*var draw = new ol.interaction.Draw({
    source: source,
    type: 'Point'
});*/

var select = new ol.interaction.Select({
    style: styleSelected
});

var modify = new ol.interaction.Modify({
    features: select.getFeatures()
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
            title: 'Earthquakes',
            source: source,
            style: styleBasic
        })
        // Image Vector
        /*new ol.layer.Image({
            title: 'Earthquakes',
            source: new ol.source.ImageVector({
                source: new ol.source.Vector({
                    url: '/data/7day-M2.5.json',
                    format: new ol.format.GeoJSON()
                }),
                style: styleBasic
            })
        })*/
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([1.4407, 43.5974]),
        zoom: 13
    }),
    controls: ol.control.defaults().extend([
        new ol.control.ScaleLine({
            className: 'ol-scale-line',
            target: document.getElementById('scale-line')
        })
    ]),
    interactions: ol.interaction.defaults().extend([/*draw, */select, modify])
});

map.on('singleclick', function (e) {
    var feature = map.forEachFeatureAtPixel(e.pixel, function (feature) {
        return feature;
    });
    var infoElement = document.getElementById('info');
    infoElement.innerHTML = feature ? feature.get('title') : '';
});

draw.on('drawend', function(evt){
    var feature = evt.feature;
    var p = feature.getGeometry();
    console.log(p.getCoordinates());
});