var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),

        new ol.layer.Vector({
            title: 'Earthquakes',
            source: new ol.source.Vector({
                url: '/data/7day-M2.5.json',
                format: new ol.format.GeoJSON()
            }),
            style: new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 3,
                    fill: new ol.style.Fill({
                        color: 'red'
                    })
                })
            })
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