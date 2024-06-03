let magicians : string [] = ["Jon", "Zakoota","Nasdoor"];
function make_great(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";

        
    }
}
make_great(magicians);//Modifies the orignal array
show_magicians(magicians);//Shows modified names