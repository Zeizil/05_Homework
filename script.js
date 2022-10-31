// Put present time at top - start with day, then get the hour
// borrow from the grab-drop exercise for the hour blocks
var present = moment();
$("#day").text(present.format("MMMM Do, YYYY"));

// Look at each event, figure out if they are present, past, or future, and assign them the correct class
// ifs - use current hour, before or after or equal to the present hour

// save button, save to local storage

// get from local storage