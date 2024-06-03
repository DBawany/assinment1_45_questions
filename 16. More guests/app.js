var guestList = ['Ozair', 'Junaid', 'Danish', 'Ali'];
// for (let i=0;  i<guestList.length; i++){
//     console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n')
// }
var notPresent = 'Junaid';
var new_guest = 'Ovais';
guestList[1] = new_guest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n');
}
guestList.unshift('Haroon', 'Adeel', 'Asim');
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow. We found a bigger table so we decide to invite more guests\n\n Thankyou\n');
}
