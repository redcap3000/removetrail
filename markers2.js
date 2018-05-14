var fs = require('fs');

markers=JSON.parse(fs.readFileSync('newMarkers.json', 'utf8'));
markers = markers.markers.marker;
result = [];
markers.map(function(o, i) {
    console.log(o);
    var n = {};
    var allowed = ['lat', 'lng', 'number', 'state', 'id'];
    for (var k in o) {
        if (allowed.indexOf(k) > -1) {
            n[k] = o[k];
        }
    }
    result.push(n);
});

fs.writeFile('markers.json', JSON.stringify(result), function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});