var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_DarkMatterretina_1 = new ol.layer.Tile({
            'title': 'Dark Matter (retina)',
            'type':'base',
            'opacity': 0.828000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_ankaradurak_2 = new ol.format.GeoJSON();
var features_ankaradurak_2 = format_ankaradurak_2.readFeatures(json_ankaradurak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ankaradurak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ankaradurak_2.addFeatures(features_ankaradurak_2);
var lyr_ankaradurak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ankaradurak_2, 
                style: style_ankaradurak_2,
                popuplayertitle: 'ankaradurak',
                interactive: true,
                title: '<img src="styles/legend/ankaradurak_2.png" /> ankaradurak'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_DarkMatterretina_1.setVisible(true);lyr_ankaradurak_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_DarkMatterretina_1,lyr_ankaradurak_2];
lyr_ankaradurak_2.set('fieldAliases', {'DURAK �L': 'DURAK �L', 'HAT_G�ZE': 'HAT_G�ZE', 'DURAK_NUMA': 'DURAK_NUMA', 'DURAK_ADI': 'DURAK_ADI', 'DURAK_ADRE': 'DURAK_ADRE', 'Enlem/Lati': 'Enlem/Lati', 'Boylam/Lon': 'Boylam/Lon', 'Custom': 'Custom', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', });
lyr_ankaradurak_2.set('fieldImages', {'DURAK �L': '', 'HAT_G�ZE': '', 'DURAK_NUMA': '', 'DURAK_ADI': '', 'DURAK_ADRE': '', 'Enlem/Lati': '', 'Boylam/Lon': '', 'Custom': '', 'field_9': '', 'field_10': '', 'field_11': '', });
lyr_ankaradurak_2.set('fieldLabels', {'DURAK �L': 'no label', 'HAT_G�ZE': 'no label', 'DURAK_NUMA': 'no label', 'DURAK_ADI': 'header label - always visible', 'DURAK_ADRE': 'no label', 'Enlem/Lati': 'no label', 'Boylam/Lon': 'no label', 'Custom': 'no label', 'field_9': 'no label', 'field_10': 'no label', 'field_11': 'no label', });
lyr_ankaradurak_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});