/**
 * Created by francesco on 04/12/14.
 */

function updateView(){
    // alert("Works!")
    var FLOOR_HEIGHT = 3;
    var geocodedLatitude = 0;
    var geocodedLongitude = 0;

    // Get the current view.
    // var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
    var camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);

    // Read user inputs
    var viewFloor = document.getElementById('view_floor').value;
    var viewZIP = document.getElementById('view_zip').value;
    var viewDirection = document.getElementById('view_direction').value;
    alert("Read user inputs." + "\nFloor: " + viewFloor + "\nZIP: " + viewZIP + "\nDirection: " + viewDirection)

    // Calculates new view values based on user input
    var viewAltitude = viewFloor * FLOOR_HEIGHT;

    geocoder.geocode( { 'address': viewZIP}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            geocodedLatitude = results[0].geometry.location.lat();
            geocodedLongitude = results[0].geometry.location.lng();
            camera.setLatitude(geocodedLatitude);
            camera.setLongitude(geocodedLongitude);
            ge.getView().setAbstractView(camera);

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });

    // Set new camera settings
    camera.setAltitude(viewAltitude);

    // Update the view in Google Earth.
    // ge.getView().setAbstractView(lookAt);
    ge.getView().setAbstractView(camera);

}

