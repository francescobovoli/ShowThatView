/**
 * Created by francesco on 04/12/14.
 */

function updateView(){
    // alert("Works!")
    var FLOOR_HEIGHT = 3;

    // Get the current view.
    // var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
    var camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);

    // Calculates new view values based on user input
    var viewFloor = document.getElementById('view_floor').value;
    var viewAltitude = viewFloor * FLOOR_HEIGHT;
    alert("Altitude: " + viewAltitude);

    // Set new view values.
    camera.setLatitude(36.584207);
    camera.setLongitude(-121.754322);
    camera.setAltitude(viewAltitude);

    // Update the view in Google Earth.
    // ge.getView().setAbstractView(lookAt);
    ge.getView().setAbstractView(camera);


}