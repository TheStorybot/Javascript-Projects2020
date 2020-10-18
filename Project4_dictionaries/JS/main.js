function dictFunct() {
    var Kings = {
        House: "Stark",
        Location: "Winterfell",
        Legend: "North",
        Words: "Winter is coming.",
        Sigil: "Wolf",
        Sigil: "Direwolf"
    };
    delete Kings.Sigil;
    document.getElementById("Dictionary").innerHTML = Kings.Sigil;
}