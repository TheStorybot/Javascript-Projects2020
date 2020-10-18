function infiniFunction() { // displays positive infinity
    document.getElementById("test").innerHTML = 3E310;
}

function neginfiniFunction() {// displays neg infinity
    document.getElementById("test2").innerHTML = -3E310;
}

function boolFunct() {//displays true boolean
    document.getElementById("bool").innerHTML = (10>5);
}

console.log(10+20); //console log addition
console.log(10<5); // displays boolean in console

function coercFunct() { //tacking 5 onto 10 to make 105 via coercion
    document.getElementById("coer").innerHTML = "10" + 5;
}

function comparFunct() { // compare 2 numeric value 'true'
    document.getElementById("comp").innerHTML = 10==10;
}

function comparFunct2() { // compare 2 numeric values 'false'
    document.getElementById("comp2").innerHTML = 10==1;
}

function tricompFunct() { // compare to variables in data type and value  true
    var a = "Hello";
    var b = "Hello";
    document.getElementById("tripc").innerHTML = a === b;
}

function tricompFunct2() { //// compare to variables in data type and value false
    var d = "Hello";
    var e = "Hello there.";
    document.getElementById("tripc2").innerHTML = d === e;
}

function tricompFunct3() {  // compare to variables in data type and value false
    var f = 20;
    var g = 30;
    document.getElementById("tripc3").innerHTML = f === g;
}

function tricompFunct4() {   // compare to variables in data type and value false
    var h = 30;
    var i = "Fourty";
    document.getElementById("tripc4").innerHTML = h === i;
}

function andFunct() {    // displays the 'AND' boolean operator both true
    document.getElementById("and").innerHTML = (10 > 5)&&(20 > 10);
}

function andFunctF() {    // displays the 'AND' boolean operator one 1 true = false outcome
    document.getElementById("andF").innerHTML = (10 > 5)&&(20 > 30);
}

function orFunct() {   /// displays 'OR' operator boolean operator only 1 has to be true
    document.getElementById("or").innerHTML = (10 > 5)||(20>30);
}

function orFunctF() {   // displays 'OR' operator boolean operator both false thus = false
    document.getElementById("orF").innerHTML = (10 > 11)||(20>30);
}

function notFunct() {   // displays the 'not' operator 
    document.getElementById("not").innerHTML = !(20>10);
}

function notFunctT() {
    document.getElementById("notT").innerHTML = !(5>10);
}

