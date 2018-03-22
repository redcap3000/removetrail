var fs = require('fs');
function ParseGPS( input ) {

if( input.indexOf( 'N' ) == -1 && input.indexOf( 'S' ) == -1 &&
    input.indexOf( 'W' ) == -1 && input.indexOf( 'E' ) == -1 ) {
    return input.split(',');
}

var parts = input.split(/[°'"]+/).join(' ').split(/[^\w\S]+/);

var directions = [];
var coords = [];
var dd = 0;
var pow = 0;

for( i in parts ) {

    // we end on a direction
    if( isNaN( parts[i] ) ) {

        var _float = parseFloat( parts[i] );

        var direction = parts[i];

        if( !isNaN(_float ) ) {
            dd += ( _float / Math.pow( 60, pow++ ) );
            direction = parts[i].replace( _float, '' );
        }

        direction = direction[0];

        if( direction == 'S' || direction == 'W' )
            dd *= -1;

        directions[ directions.length ] = direction;

        coords[ coords.length ] = dd;
        dd = pow = 0;

    } else {

        dd += ( parseFloat(parts[i]) / Math.pow( 60, pow++ ) );

    }

}

if( directions[0] == 'W' || directions[0] == 'E' ) {
    var tmp = coords[0];
    coords[0] = coords[1];
    coords[1] = tmp;
}

return coords;
};
charkas = []
 fs.readFile("charkas.csv", "utf8", function(err, body) {
            if (err) {
                return;
            }

           body = body.split('\n');

            var keys = body[0].split(',');
            body.filter(function(a, i) {
             		var obj = {}
             		if(i != 0){
             		a.split(',').filter(function(row,x){
             			var r;
             			console.log(row);
						if(x == 2){
							r = row.replace(';',',');
							r = r.split(',');
							var lat = ParseGPS(r[0]);
							var lng = 0; 
							if(typeof r[1] == "string"){
								var lng = ParseGPS(r[1].replace(" ",''));

							}
							console.log(lat  + lng);
							var r = lat + lng;
             			}else{
             				r = row;
             			}
             			obj[keys[x]] = r;

             		})

             		charkas.push(obj);
             		}

            });	
            fs.writeFile('c.json', JSON.stringify(charkas), function (err,data) {
							  if (err) {
							    return console.log(err);
							  }
							  console.log(data);
							});
        });

module.exports = {

		getList : function(){
			return charkas;
		}

};