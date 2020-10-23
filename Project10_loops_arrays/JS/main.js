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
    color: "White/Brown",
    name: "Ruby",
    temperament: "Sweet",
    description : pupFunct() {
        return "My dog is a " + this.temperment + this.color + this.breed + " named, " + this.name;
    }
};
document.getElementById("pup").innerHTML = dog.description();

function breakFunct() {
    for (x = 0; x < 15; x++) {
        if (x === 7) { break; }
    }
    document.getElementById("break").innerHTML = "This is number " + x + ". <br>";
}

function continueFunct() {
    for (x = 0; x < 15; x++) {
        if (x === 7) { continue; }
    }
    document.getElementById("continue").innerHTML = "This is number " + x + ". <br>";
}
