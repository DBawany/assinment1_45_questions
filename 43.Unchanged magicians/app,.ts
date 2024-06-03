let magicians: string[] = ["Zakoota", "Nasdoor", "umroayaar"];
function make_great(magicians: string[]): string[] {
    let greatMagicians =[];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;

}
let greatMagicians =make_great(magicians.slice()); //creates a new modified array
console.log("Orignal magicians:");
show_magicians(magicians); //Shows orignal names
console.log("Great magicians:");
show_magicians(greatMagicians);// Show modified names