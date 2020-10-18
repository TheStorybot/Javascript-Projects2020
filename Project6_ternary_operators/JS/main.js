function rideFunction() { // create ride function
    var height, canRide;   //create variable heigh and canRide
    height = document.getElementById("height").value;  // determine value appearing in input bar
    canRide = (height < 52) ? "You are too short":"You are tall enough"; // utilize '?' to determine which outcome will be selected based on value within input
    document.getElementById("ride").innerHTML = canRide + " to ride.";  // display results within element id'ed "ride" with a string completion
}

function ageFunction() {  // same as ride function but with alterations to value being compared and different string outputs
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote.";
}

function Vehicle(Make, Model, Year, Color, Registration) { //creation of contstructor function
    this.Vehicle_make = Make;  
    this.Vehicle_model = Model;
    this.Vehicle_year = Year;
    this.Vehicle_color = Color;
    this.Vehicle_registration = Registration; // additional 'this' for testing 
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  // variable used in conjunction of contructor function to create a new object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White/Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Dylan = new Vehicle("Honda", "Civic HB", 2018, "Blue", "Washington"); // additional 'new' for testing
//var var = new Vehicle("Dodge", "Viper", 2020, "Red");  // what happens when you use the forbidden words... seriously makes everything stop working.
function myFunct() {   // function used to extract information from vehicle constructor instantiations
    document.getElementById("new-and-this").innerHTML = 
    "Dylan drives a " + Dylan.Vehicle_color + "-colored " + Dylan.Vehicle_model +
    " manufactured in " + Dylan.Vehicle_year + " and has it registered in " + Dylan.Vehicle_registration + ".";
}


function Character(Class, Race, Level, iLevel) {  // rogue, undead, 120(50?), ???  my own contructor function
    this.Character_Class = Class;
    this.Character_Race = Race;
    this.Character_level = Level;
    this.Character_ilevel = iLevel;
}

function nestFunct() {  // function containing nested functions
    document.getElementById("nested-function").innerHTML = Count();  //displays the results of the nested functions below it
    function Count() { //first nested function containing a variable and another nested function
        var starting_point = 500;
        function plus_sixty() {starting_point += 60;} // function used to add 60 to our variable from Count() function
        plus_sixty(); // actually calling the plus_sixty() function to action
        return starting_point; // giving the result of the functions to the .innerHTML property to display
    }
}
