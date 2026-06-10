var wms_layers = [];


        var lyr_GoogleEarthSatelite_0 = new ol.layer.Tile({
            'title': 'Google Earth Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1 = new ol.format.GeoJSON();
var features_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1 = format_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1.readFeatures(json_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1.addFeatures(features_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1);
var lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1, 
                style: style_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1,
                popuplayertitle: 'Pemetaan HPT Bunihayu (4) — Pemetaan HPT Bunihayu',
                interactive: true,
    title: 'Pemetaan HPT Bunihayu (4) — Pemetaan HPT Bunihayu<br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_0.png" /> <div>Lahan Belum Optimal<br></div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_1.png" /> <div>Lahan Jagung<br></div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_2.png" /> <div>Lahan Rumput Odot</div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_3.png" /> <div>Rumput Gajah</div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_4.png" /> <div>Rumput Gajah<br></div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_5.png" /> <div>Rumput Mulato<br></div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_6.png" /> <div>Tanaman Jagung</div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_7.png" /> <div>Tanaman Jagung<br></div><br />\
    <img src="styles/legend/PemetaanHPTBunihayu4PemetaanHPTBunihayu_1_8.png" /> <br />' });
var format_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2 = new ol.format.GeoJSON();
var features_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2 = format_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2.readFeatures(json_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2.addFeatures(features_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2);
var lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2, 
                style: style_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2,
                popuplayertitle: 'Pemetaan HPT Bunihayu (4) — Pemetaan HPT Bunihayu',
                interactive: true,
                title: 'Pemetaan HPT Bunihayu (4) — Pemetaan HPT Bunihayu'
            });

lyr_GoogleEarthSatelite_0.setVisible(true);lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1.setVisible(true);lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2.setVisible(true);
var layersList = [lyr_GoogleEarthSatelite_0,lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1,lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2];
lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'snippet': '', });
lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_1.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PemetaanHPTBunihayu4PemetaanHPTBunihayu_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});