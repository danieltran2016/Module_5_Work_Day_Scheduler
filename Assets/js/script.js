// TODO: Add code to display the current date in the header of the page.

//this section will set the current date on the top and make a variable to compare the time later. -DT
$(document).ready(function () {
  var timeNow = dayjs().format('dddd, MMMM DD YYYY'); // this creates a variable that stores the current tiem in Weekday, Month, Day, Year format -DT
  $('#currentDay').text(timeNow); //this takes the ID tag currentDay and replaces it with the information stored in the variable timenNow -DT
}
);
 
 
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//this section is a function that will compare the immediate time with the time blocks and add a class of past present and future -DT
//depending on what the time is so that they are color coded based on time. -DT 
function colorChanger(){
$(".time-block").each(function(){ //this iterates through EACh section looking for the class time-block -DT
var timeId = parseInt($(this).attr('id')); //this gets the ID of each one which is a string and makes it a number -DT
var timeHr = parseInt(dayjs().format("HH")); //this sets up the hour so the function can compare it to the ID's and makes it a number to compare against -DT
console.log(timeHr); //this is to check what the "this" is referring to -DT
console.log(timeId); //this is to check the value of the time id's that are being pulled -DT
if (timeId < timeHr){ //this is comparing the time block against current time. if current time is greater than the time block is in the past. -DT
  $(this).addclass("past")}
else if (timeId === timeHr){ //if time block is strictly equal to the current time, the block is the current hour -DT
  $(this).addclass("present")}
else{ //if time block is is greater than the current time, the block is the future hour. you dont technically need this -DT
 //since if it isnt any of the first two, it has to be the third but i have it here since i cant get the code to work. -DT
  $(this).addclass("future")}
})
}




 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

//this section is saving the inputs of the user locallt -DT
var save = $(".saveBtn");
save.on("click", function(){
  console.log(this);
  var input = $(this).siblings(".description").val(); //This takes the input of the user from the box and saves it in a variable input -DT
  var timeSlot = $(this).parent().attr("id"); //this takes the id of the slot and sets that to timeSlot -DT
  localStorage.setItem(timeSlot, input); // this stores the data to the corresponding hour time slot.  -DT
});

$("#9").val(localstorage.getitem('9')); //the jquery selector has an id selector of #9 and a class selector of .description
//it should go there and set the value ("val()") to the local storage that gets item stored as 9 and output it. i know the value is stored
//and will console log with the correct stored input value from the user, but i cant get it to repost the values to the page. 

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  colorChanger();