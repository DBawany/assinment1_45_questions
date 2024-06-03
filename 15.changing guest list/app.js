var guestList = ['Ozair', 'Junaid', 'Danish', 'Ali'];
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n');
}
var notPresent = 'Junaid';
var new_guest = 'Danish';
guestList[1] = new_guest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n');
}
console.log("Mr ".concat(notPresent, " will not come tomorrow for dinner."));
