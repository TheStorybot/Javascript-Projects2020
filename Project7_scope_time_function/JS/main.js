var x = 10;

function globFunct() {
    var z = 20;
    document.getElementById("glob").innerHTML = x + z;
}

function errglobFunct() {
    document.getElementById("errGlob").innerHTML = z + x;
}

function ifFunction() {
    if (new Date() .getHours() < 12) {
        document.getElementById("ifstate").innerHTML = "Good morning!";
    }
    else {
        document.getElementById("ifstate").innerHTML = "Good afternoon!";
    }
}

function dungeonFunction() {
    level = document.getElementById("level").value;
    if (level >= 95) {
        dungeon = "You are high enough level to enter this dungeon!";
    }
    else {
        dungeon = "You need to be atleast level 95 to enter.";
    }
    document.getElementById("whatLevel").innerHTML = dungeon;
}

function healerFunction() {
    Health = document.getElementById("health").value;
    if (Health < 100 == Health > 0) {
        action = "You need Healing!";
    }
    else if (Health == 100) {
        action = "You are full health!";
    }
    else {
        action = "You are dead... need resurrection!";
    }
    document.getElementById("whataction").innerHTML = action;
}