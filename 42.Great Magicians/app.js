var magicians = ["Jon", "Zakoota", "Nasdoor"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";
    }
}
make_great(magicians); //Modifies the orignal array
