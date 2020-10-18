function fullSentence() {  //function used to concatenate and display the strings of multiple variable
    var p1 = "Break on ";
    var p2 = "through ";
    var p3 = "to the ";
    var p4 = "other side!";
    var wholeSentence = p1.concat(p2, p3, p4); // variable that cancatenates other variable
    document.getElementById("concat").innerHTML = wholeSentence;
}

function sliceFunct() {  // function to slice a string
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(0,9); //dictates what section of the string shall be sliced
    document.getElementById("slice").innerHTML = section;
    var upp = sentence.toUpperCase();  // turns the string to uppercase
    document.getElementById("upp").innerHTML = upp;
    var search = sentence.search("Johnny"); // searches for the location of the part of the string
    document.getElementById("search").innerHTML = search;
}

function numbtostringFunct() { /// changes integer to a string
    var z = 256;
    document.getElementById("numbToString").innerHTML = z.toString();
}

function preciseFunct() {  // cuts the number down to a provided length
    var z = 256.1923981981273987123;
    document.getElementById("precise").innerHTML = z.toPrecision(15);
}

function tofixedFunct() {   // rounds a number up to proved decimal point
    var z = 256.1923981981273987123;
    document.getElementById("fixed").innerHTML = z.toFixed(2);
}

function valueOfFunct() {  // provides the absolute value of a string. usually done behind the scenes
    var z = "Why, Hello!";
    document.getElementById("valueof").innerHTML = z.valueOf();
}