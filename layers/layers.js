var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimiteMunicipal_2 = new ol.format.GeoJSON();
var features_LimiteMunicipal_2 = format_LimiteMunicipal_2.readFeatures(json_LimiteMunicipal_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteMunicipal_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_2.addFeatures(features_LimiteMunicipal_2);
var lyr_LimiteMunicipal_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_2, 
                style: style_LimiteMunicipal_2,
                popuplayertitle: 'Limite Municipal ',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipal_2.png" /> Limite Municipal '
            });
var format_EstruturadeLanamento_3 = new ol.format.GeoJSON();
var features_EstruturadeLanamento_3 = format_EstruturadeLanamento_3.readFeatures(json_EstruturadeLanamento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstruturadeLanamento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstruturadeLanamento_3.addFeatures(features_EstruturadeLanamento_3);
var lyr_EstruturadeLanamento_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstruturadeLanamento_3, 
                style: style_EstruturadeLanamento_3,
                popuplayertitle: 'Estrutura de Lançamento',
                interactive: true,
                title: '<img src="styles/legend/EstruturadeLanamento_3.png" /> Estrutura de Lançamento'
            });
var format_BocadeLobo_4 = new ol.format.GeoJSON();
var features_BocadeLobo_4 = format_BocadeLobo_4.readFeatures(json_BocadeLobo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BocadeLobo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BocadeLobo_4.addFeatures(features_BocadeLobo_4);
var lyr_BocadeLobo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BocadeLobo_4, 
                style: style_BocadeLobo_4,
                popuplayertitle: 'Boca de Lobo',
                interactive: true,
                title: '<img src="styles/legend/BocadeLobo_4.png" /> Boca de Lobo'
            });
var format_PoodeVisita_5 = new ol.format.GeoJSON();
var features_PoodeVisita_5 = format_PoodeVisita_5.readFeatures(json_PoodeVisita_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoodeVisita_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoodeVisita_5.addFeatures(features_PoodeVisita_5);
var lyr_PoodeVisita_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoodeVisita_5, 
                style: style_PoodeVisita_5,
                popuplayertitle: 'Poço de Visita',
                interactive: true,
                title: '<img src="styles/legend/PoodeVisita_5.png" /> Poço de Visita'
            });
var format_Duto_6 = new ol.format.GeoJSON();
var features_Duto_6 = format_Duto_6.readFeatures(json_Duto_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duto_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duto_6.addFeatures(features_Duto_6);
var lyr_Duto_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duto_6, 
                style: style_Duto_6,
                popuplayertitle: 'Duto',
                interactive: true,
                title: '<img src="styles/legend/Duto_6.png" /> Duto'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_LimiteMunicipal_2.setVisible(true);lyr_EstruturadeLanamento_3.setVisible(true);lyr_BocadeLobo_4.setVisible(true);lyr_PoodeVisita_5.setVisible(true);lyr_Duto_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleHybrid_1,lyr_LimiteMunicipal_2,lyr_EstruturadeLanamento_3,lyr_BocadeLobo_4,lyr_PoodeVisita_5,lyr_Duto_6];
lyr_LimiteMunicipal_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'nm_mun': 'nm_mun', 'cd_err': 'cd_err', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'nm': 'nm', 'shape_STAr': 'shape_STAr', 'shape_STLe': 'shape_STLe', });
lyr_EstruturadeLanamento_3.set('fieldAliases', {'Sigla': 'Sigla', 'CorpHidr': 'CorpHidr', 'Observ': 'Observ', 'FID_ELAN': 'FID_ELAN', 'Bacia': 'Bacia', 'layer': 'layer', 'path': 'path', 'FID_Bacias': 'FID_Bacias', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'ID': 'ID', 'Nome': 'Nome', });
lyr_BocadeLobo_4.set('fieldAliases', {'Qtd': 'Qtd', 'Grelha': 'Grelha', 'Combin': 'Combin', 'Est_Cons': 'Est_Cons', 'Observ': 'Observ', 'Bacia': 'Bacia', });
lyr_PoodeVisita_5.set('fieldAliases', {'Sigla': 'Sigla', 'Est_Cons': 'Est_Cons', 'Observ': 'Observ', 'Bacia': 'Bacia', 'id_novo': 'id_novo', });
lyr_Duto_6.set('fieldAliases', {'Material': 'Material', 'Observ': 'Observ', 'Rede': 'Rede', 'Diamet': 'Diamet', 'Rede_ID': 'Rede_ID', 'ProfIN': 'ProfIN', 'ProfOUT': 'ProfOUT', 'Comprim': 'Comprim', });
lyr_LimiteMunicipal_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'nm_mun': 'TextEdit', 'cd_err': 'TextEdit', 'x_coord': 'TextEdit', 'y_coord': 'TextEdit', 'nm': 'TextEdit', 'shape_STAr': 'TextEdit', 'shape_STLe': 'TextEdit', });
lyr_EstruturadeLanamento_3.set('fieldImages', {'Sigla': 'TextEdit', 'CorpHidr': 'TextEdit', 'Observ': 'TextEdit', 'FID_ELAN': 'TextEdit', 'Bacia': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'FID_Bacias': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'ID': 'Range', 'Nome': 'TextEdit', });
lyr_BocadeLobo_4.set('fieldImages', {'Qtd': 'TextEdit', 'Grelha': 'TextEdit', 'Combin': 'TextEdit', 'Est_Cons': 'TextEdit', 'Observ': 'TextEdit', 'Bacia': 'TextEdit', });
lyr_PoodeVisita_5.set('fieldImages', {'Sigla': 'TextEdit', 'Est_Cons': 'TextEdit', 'Observ': 'TextEdit', 'Bacia': 'TextEdit', 'id_novo': 'TextEdit', });
lyr_Duto_6.set('fieldImages', {'Material': 'TextEdit', 'Observ': 'TextEdit', 'Rede': 'TextEdit', 'Diamet': 'TextEdit', 'Rede_ID': 'TextEdit', 'ProfIN': 'TextEdit', 'ProfOUT': 'TextEdit', 'Comprim': 'TextEdit', });
lyr_LimiteMunicipal_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'id': 'hidden field', 'nm_mun': 'hidden field', 'cd_err': 'hidden field', 'x_coord': 'hidden field', 'y_coord': 'hidden field', 'nm': 'hidden field', 'shape_STAr': 'hidden field', 'shape_STLe': 'hidden field', });
lyr_EstruturadeLanamento_3.set('fieldLabels', {'Sigla': 'inline label - visible with data', 'CorpHidr': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'FID_ELAN': 'inline label - visible with data', 'Bacia': 'inline label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', 'FID_Bacias': 'hidden field', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'X_COORD': 'hidden field', 'Y_COORD': 'hidden field', 'ID': 'hidden field', 'Nome': 'no label', });
lyr_BocadeLobo_4.set('fieldLabels', {'Qtd': 'inline label - visible with data', 'Grelha': 'inline label - visible with data', 'Combin': 'inline label - visible with data', 'Est_Cons': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'Bacia': 'inline label - visible with data', });
lyr_PoodeVisita_5.set('fieldLabels', {'Sigla': 'inline label - visible with data', 'Est_Cons': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'Bacia': 'inline label - visible with data', 'id_novo': 'inline label - visible with data', });
lyr_Duto_6.set('fieldLabels', {'Material': 'inline label - visible with data', 'Observ': 'inline label - visible with data', 'Rede': 'inline label - visible with data', 'Diamet': 'inline label - visible with data', 'Rede_ID': 'inline label - visible with data', 'ProfIN': 'hidden field', 'ProfOUT': 'hidden field', 'Comprim': 'inline label - visible with data', });
lyr_Duto_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});