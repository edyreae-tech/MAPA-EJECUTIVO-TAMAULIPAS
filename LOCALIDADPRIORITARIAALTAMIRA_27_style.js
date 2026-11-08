var size = 0;
var placement = 'point';

var style_LOCALIDADPRIORITARIAALTAMIRA_27 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "3.9000000000000004px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#ffaa00";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("LOCALIDAD") !== null) {
        labelText = String(feature.get("LOCALIDAD"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,170,0,1.0)', lineDash: [8.74,1.748,3.496,1.748,3.496,1.748], lineCap: 'butt', lineJoin: 'miter', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
