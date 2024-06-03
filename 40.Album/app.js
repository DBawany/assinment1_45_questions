function make_album(artist_name, album_title) {
    return { artist_name: artist_name, album_title: album_title };
}
var album1 = make_album("Atif", "Tajdar-e-haram");
var album2 = make_album("Madad", "Roshan Pakistan");
var album3 = make_album("Junaid", "Dil Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of tracks
function make_album2(artist_name, album_title, numberoftracks) {
    return { artist_name: artist_name, album_title: album_title, numberoftracks: numberoftracks };
}
var album4 = make_album2("Atif", "Beintiha", 44);
var album5 = make_album2("Madad", "ajeeb kahani", 33);
var album6 = make_album2("Junaid", "jazba junoon", 22);
console.log(album4);
console.log(album5);
console.log(album6);
