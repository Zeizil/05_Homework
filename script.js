// Put present time at top - start with day, then get the hour
var present = moment();
$("#day").text(present.format("MMMM Do, YYYY"));

var currentHour = moment().format("h");
console.log(currentHour);

// Look at each event, figure out if they are present, past, or future, and assign them the correct class
// ifs - use current hour, before or after or equal to the present hour
function timeCompare(){
    if(currentHour == 9){
        $("#9").addClass(present);
        $("#10").addClass(future);
        $("#11").addClass(future);
        $("#12").addClass(future);
        $("#1").addClass(future);
        $("#2").addClass(future);
        $("#3").addClass(future);
        $("#4").addClass(future);
        $("#5").addClass(future);
    }
    else if(currentHour == 10){
        $("#9").addClass(past);
        $("#10").addClass(present);
        $("#11").addClass(future);
        $("#12").addClass(future);
        $("#1").addClass(future);
        $("#2").addClass(future);
        $("#3").addClass(future);
        $("#4").addClass(future);
        $("#5").addClass(future);
    }
    else if(currentHour == 11){
        $("#9").addClass(past);
        $("#10").addClass(past);
        $("#11").addClass(present);
        $("#12").addClass(future);
        $("#1").addClass(future);
        $("#2").addClass(future);
        $("#3").addClass(future);
        $("#4").addClass(future);
        $("#5").addClass(future);
    }
    else if(currentHour == 12){
        $("#9").addClass(past);
        $("#10").addClass(past);
        $("#11").addClass(past);
        $("#12").addClass(present);
        $("#1").addClass(future);
        $("#2").addClass(future);
        $("#3").addClass(future);
        $("#4").addClass(future);
        $("#5").addClass(future);
    }
    else if(currentHour == 1){
        $("#9").addClass(past);
        $("#10").addClass(past);
        $("#11").addClass(past);
        $("#12").addClass(past);
        $("#1").addClass(present);
        $("#2").addClass(future);
        $("#3").addClass(future);
        $("#4").addClass(future);
        $("#5").addClass(future);
    }
    else if(currentHour == 2){
        $("#9").addClass(past);
        $("#10").addClass(past);
        $("#11").addClass(past);
        $("#12").addClass(past);
        $("#1").addClass(past);
        $("#2").addClass(present);
        $("#3").addClass(future);
        $("#4").addClass(future);
        $("#5").addClass(future);
    }
    else if(currentHour == 3){
        $("#9").addClass(past);
        $("#10").addClass(past);
        $("#11").addClass(past);
        $("#12").addClass(past);
        $("#1").addClass(past);
        $("#2").addClass(past);
        $("#3").addClass(present);
        $("#4").addClass(future);
        $("#5").addClass(future);
    }
    else if(currentHour == 4){
        $("#9").addClass(past);
        $("#10").addClass(past);
        $("#11").addClass(past);
        $("#12").addClass(past);
        $("#1").addClass(past);
        $("#2").addClass(past);
        $("#3").addClass(past);
        $("#4").addClass(present);
        $("#5").addClass(future);
    }
    else if(currentHour == 5){
        $("#9").addClass(past);
        $("#10").addClass(past);
        $("#11").addClass(past);
        $("#12").addClass(past);
        $("#1").addClass(past);
        $("#2").addClass(past);
        $("#3").addClass(past);
        $("#4").addClass(past);
        $("#5").addClass(present);
    }
}


// save button, save to local storage

// get from local storage