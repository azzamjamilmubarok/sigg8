var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_SEMARANG_1 = new ol.format.GeoJSON();
var features_SEMARANG_1 = format_SEMARANG_1.readFeatures(json_SEMARANG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEMARANG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMARANG_1.addFeatures(features_SEMARANG_1);
var lyr_SEMARANG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SEMARANG_1, 
                style: style_SEMARANG_1,
                popuplayertitle: 'SEMARANG',
                interactive: true,
                title: '<img src="styles/legend/SEMARANG_1.png" /> SEMARANG'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_SEMARANG_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_SEMARANG_1];
lyr_SEMARANG_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SEMARANG_1.set('fieldImages', {'OBJECTID': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SEMARANG_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SEMARANG_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});