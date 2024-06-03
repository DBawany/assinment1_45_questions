function make_album(artist_name :string,album_title: string) {
    return{artist_name,album_title}

}
let album1= make_album("Atif", "Tajdar-e-haram");
let album2= make_album("Madad", "Roshan Pakistan");
let album3= make_album("Junaid", "Dil Dil");

console.log(album1);
console.log(album2);
console.log(album3);


//Number of tracks

function make_album2(artist_name :string,album_title: string,numberoftracks:number) {
    return{artist_name,album_title,numberoftracks}
}

let album4= make_album2("Atif", "Beintiha", 44);
let album5= make_album2("Madad", "ajeeb kahani",33);
let album6= make_album2("Junaid", "jazba junoon",22);

console.log(album4);
console.log(album5);
console.log(album6);