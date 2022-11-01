// button
var saveButton = $(".saveBtn");
var containerDiv = document.getElementById('container')

// Put present time at top - start with day, then get the hour
var present = moment();
$("#day").text(present.format("MMMM Do, YYYY"));

var currentHour = moment().format("h");
console.log(currentHour);

// Look at each event, figure out if they are present, past, or future, and assign them the correct class
// ifs - use current hour, before or after or equal to the present hour
// could've done this in a for loop but I am tired
function timeCompare(){
    if(currentHour == 9){
        $("#9").children().addClass("present");
        $("#10").children('input').addClass("future");
        $("#11").children('input').addClass("future");
        $("#12").children('input').addClass("future");
        $("#1").children('input').addClass("future");
        $("#2").children('input').addClass("future");
        $("#3").children('input').addClass("future");
        $("#4").children('input').addClass("future");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 10){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("present");
        $("#11").children('input').addClass("future");
        $("#12").children('input').addClass("future");
        $("#1").children('input').addClass("future");
        $("#2").children('input').addClass("future");
        $("#3").children('input').addClass("future");
        $("#4").children('input').addClass("future");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 11){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("past");
        $("#11").children('input').addClass("present");
        $("#12").children('input').addClass("future");
        $("#1").children('input').addClass("future");
        $("#2").children('input').addClass("future");
        $("#3").children('input').addClass("future");
        $("#4").children('input').addClass("future");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 12){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("past");
        $("#11").children('input').addClass("past");
        $("#12").children('input').addClass("present");
        $("#1").children('input').addClass("future");
        $("#2").children('input').addClass("future");
        $("#3").children('input').addClass("future");
        $("#4").children('input').addClass("future");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 1){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("past");
        $("#11").children('input').addClass("past");
        $("#12").children('input').addClass("past");
        $("#1").children('input').addClass("present");
        $("#2").children('input').addClass("future");
        $("#3").children('input').addClass("future");
        $("#4").children('input').addClass("future");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 2){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("past");
        $("#11").children('input').addClass("past");
        $("#12").children('input').addClass("past");
        $("#1").children('input').addClass("past");
        $("#2").children('input').addClass("present");
        $("#3").children('input').addClass("future");
        $("#4").children('input').addClass("future");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 3){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("past");
        $("#11").children('input').addClass("past");
        $("#12").children('input').addClass("past");
        $("#1").children('input').addClass("past");
        $("#2").children('input').addClass("past");
        $("#3").children('input').addClass("present");
        $("#4").children('input').addClass("future");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 4){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("past");
        $("#11").children('input').addClass("past");
        $("#12").children('input').addClass("past");
        $("#1").children('input').addClass("past");
        $("#2").children('input').addClass("past");
        $("#3").children('input').addClass("past");
        $("#4").children('input').addClass("present");
        $("#5").children('input').addClass("future");
    }
    else if(currentHour == 5){
        $("#9").children('input').addClass("past");
        $("#10").children('input').addClass("past");
        $("#11").children('input').addClass("past");
        $("#12").children('input').addClass("past");
        $("#1").children('input').addClass("past");
        $("#2").children('input').addClass("past");
        $("#3").children('input').addClass("past");
        $("#4").children('input').addClass("past");
        $("#5").children('input').addClass("present");
    }
}

timeCompare();

// save button, save to local storage
function saveLocal(event){
    event.preventDefault();
    console.log("I ran", event.target);
    const parentEl = $(event.target).parent();
    const inputElement = $(parentEl.children("input")[0]);
    const textVal = inputElement.val();
    const id = parentEl.attr('id');
    localStorage.setItem(id, textVal);
}

const hours = $('.row');

saveButton.on('click', saveLocal);

// get from local storage
for(let i = 0; i < hours.length; i++){
    const time = $(hours[i]).attr('id');
    const inputBox = $($(hours[i]).children("input")[0]);
    const storedVal = localStorage.getItem(time);
    inputBox.val(storedVal);
}