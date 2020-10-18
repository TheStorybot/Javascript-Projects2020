function popFunction() {
    alert("Boom!") //creates a popup containing text
}

function myFunction() {
    var dog = "I want to play fetch!"; //assigns a string to a variable
    var dog = dog.fontcolor("yellow"); // alters the font color of the string
    document.getElementById("dogtx").innerHTML = dog; //selects HTML element to have its contents replaced by the variable using the innerHTML property
}

function concatFunction() {   //creates a new function
    var word = "My name is who, "; // assigns a string to a variable
    word += "my name is what, "; //concatenates the string variable
    word += "my name is chika chika Slim Shady";
    document.getElementById("concat").innerHTML = word;
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

document.getElementById("CtoF").innerHTML = toCelsius(90);


