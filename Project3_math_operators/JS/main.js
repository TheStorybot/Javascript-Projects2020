function addFunct() { // function showing addition
    var addition = 32 + 210;
    document.getElementById("add").innerHTML = "32 + 210 = " + addition;
}

function subFunct() { // function showing subtraction
    var subtraction = 26 - 351;
    document.getElementById("subt").innerHTML = "26 - 351 = " + subtraction;
}

function multFunct() {  // function showing multiplication
    var multiplication = 3 * 351;
    document.getElementById("mult").innerHTML = "3 * 351 = " + multiplication;
}

function divFunct() {   // function showing division
    var division = 420 / 20;
    document.getElementById("divis").innerHTML = "420 / 20 = " + division;
}

function allFunct() {   // function showing multiple operators
    var moremath = (1 + 2) * 10 / 2 - 5;
    document.getElementById("allmath").innerHTML = "1 plus 2, multiplied by 10, divided in half and then suibtracted by 5 equals " + moremath; 
}

function modulusFunct() {    // function showing modulus operator
    var modulus = 25 % 6;
    document.getElementById("modu").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negFunct() {  // function showing negation operator
    var x = 10;
    document.getElementById("negationop").innerHTML = -x;
}

function incFunct() {  // function showing incrementation operator
    x = 5;
    x++;
    document.getElementById("increment").innerHTML = x;
}

var x = 6;   // javascript showing decrementation
x--;
document.write(x);

function randomFunction() {    // fuction showing random number in the form of an alert pop-up
    alert(Math.random() * 100);
}

function maxFunct() {   // function showing a "max" Math method
    var z = Math.max(20,30,60,-190,100);
    document.getElementById("max").innerHTML = z;
}