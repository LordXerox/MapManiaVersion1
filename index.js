var gMap;
var LatLng;
var counter = 0;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3
    });

    var loc1 = new google.maps.LatLng(43.61685277674889, -72.54192494094);

    var loc1MORE = new google.maps.LatLng(loc1.lat()+5, loc1.lng()+5);
    var loc1LESS = new google.maps.LatLng(loc1.lat()-5, loc1.lng()-5);

    function gameRound(coord, text, hint) { //coord is latlng object, text is explaination text
        gMap.addListener("bounds_changed", () => {
            //console.log(gMap.getBounds().contains(coord))
            console.log("Zoom: "+gMap.getZoom())
            if ((gMap.getBounds().contains(coord) == true)) {
                var marker = new google.maps.Marker({position:{lat: coord.lat(), lng: coord.lng()}, map:gMap})
                };
                marker.addListener('click', function(){
                    //click on location marker, pan over and zoom to a close level
                    gMap.panTo(coord)
                    gMap.setZoom(18)
                    //points counter
                    counter++
                    console.log("points: "+counter)
                });
        });
        
    }


    gameRound(loc1)



    
    


    /*
    // Marker for Woodstock, VT sandwich store
    var marker = new google.maps.Marker({position:{lat: 43.61685277674889, lng: -72.54192494094}, map:gMap}); */


    /*
    // Second style marker & listener for Somerville, MA 
    var marker2 = new google.maps.Marker({position:{lat: 42.38769173878851, lng: -71.10065857421371}, map:gMap});
    marker2.setIcon("http://maps.google.com/mapfiles/kml/paddle/red-circle.png");
    var infoWindow = new google.maps.InfoWindow({content:'Sommerville, MA'});
    marker2.addListener('click', function(){infoWindow.open(gMap, marker2)} ) */

/*
    gMap.addListener("bounds_changed", () => {
        // Output new position and zoom
        console.log("Position: "+gMap.getCenter()+" Zoom: "+gMap.getZoom());
      }); */
}

function initApplication() {
    console.log('Map Mania v.1 start');
}