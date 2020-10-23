function callLoop() {
    var digit = "";
    var x = 1;
    while(x < 100) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("100loop").innerHTML = digit;
}

function strLength() {
    var str = "Hello my dude."
    document.getElementById("strlength").innerHTML = "The string length is " + str.length; 
}


    var classes = ["Rogue", "Priest", "Warrior", "Warlock", "Druid", "Shaman", "Mage"];
    var content = "";
    var y;
    function forLoop() {
        for (y = 0; y < classes.length; y++) {
            content += classes[y] + "<br>";
        }
        document.getElementById("classlist").innerHTML = content;
}

function dogPics() {
    var dog_pic = [];
    dog_pic[0] = "running";
    dog_pic[1] = "borking";
    dog_pic[2] = "sneezing";
    dog_pic[3] = "sleeping";
    document.getElementById("dog").innerHTML = "In this picture, the dog is " + dog_pic[3] + ".";
}

function constantFunction() {
    const weapon = {type:"Sword", level:"60", rarity:"uncommon"};
    weapon.rarity = "Legendary";
    weapon.dropchance = "0.01%";
    document.getElementById("constant").innerHTML = "The chance of the " + weapon.rarity + " " + weapon.type + " to drop was " + weapon.dropchance;
}

    var x = 200
    document.write("<br>" + x);
    {
        let x = 150
        document.write("<br>" + x);
    }
    document.write("<br>" + x);

function returnFunct(name) {
    return "Hello, my name is " + name;
}
document.getElementById("return").innerHTML = returnFunct("Dylan");


let pup = {
    breed: "Kleekai",
    color: "white/brown",
    name: "Ruby",
    temperament: "sweet",
    description : function() {
        return "My dog is a " + this.temperament + ", " + this.color + ", " + this.breed + " named, " + this.name;
    }
};
document.getElementById("pup").innerHTML = pup.description();

function breakFunct() {
    var text = "";
    var x;
    for (x = 0; x < 15; x++) {
        if (x === 7) { break; }
        text += "This is number " + x + ". <br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continueFunct() {
    var text = "";
    var x;
    for (x = 0; x < 15; x++) {
        if (x === 7) { continue; }
        text += "This is number " + x + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}
