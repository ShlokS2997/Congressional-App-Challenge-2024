//creation of variables that stores information from the database aboutt the surfboard. For example, name, skill level, wave usage type, improvement, image, etc.
var surfboard = getColumn("Surfboards", "Name");
var use = getColumn("Surfboards", "Use");
var level = getColumn("Surfboards", "Level");
var improvement = getColumn("Surfboards", "Improvement");
var image = getColumn("Surfboards", "Image");

//On Event for when user clicks any of the buttons on the app

onEvent("start_button", "click", function( ) {
  setScreen("Level_Screen");
});
onEvent("next_level_button", "click", function( ) {
  setScreen("useScreen");
});
onEvent("next_use_button", "click", function( ) {
  setScreen("improvementScreen");
});
onEvent("next_improvement_button", "click", function( ) {
  setScreen("resultScreen");
  results(getText("level_dropdown"), getText("improvement_dropdown"), getText("use_dropdown"));
});
onEvent("home_button_1", "click", function( ) {
  setScreen("Home_Screen");
});
onEvent("home_button_2", "click", function( ) {
  setScreen("Home_Screen");
});
onEvent("home_button_3", "click", function( ) {
  setScreen("Home_Screen");
});
onEvent("home_button_4", "click", function( ) {
  setScreen("Home_Screen");
});

//for loop within a function where the app traverses through the database to find a match between the user's input and a surfboard.
function results(user_level, user_use, user_improvement) {
  for (var i = 0; i < surfboard.length; i++) {
    if ((level[i] == user_level) && (use[i] == user_use) && (improvement[i] == user_improvement)) {
      setText("surfboard_result", surfboard[i]);
      setImageURL("surfboard_image", image[i]);
    }
  }
}
