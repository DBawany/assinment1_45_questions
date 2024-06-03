let guestList : string[]=['Ozair','Junaid','Danish','Ali'];
for (let i=0;  i<guestList.length; i++){
    console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n')
}
let notPresent :string = 'Junaid';
let new_guest :string = 'Danish';
guestList[1] = new_guest
for (let i=0;  i<guestList.length; i++){
    console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n')
}
console.log(`Mr ${notPresent} will not come tomorrow for dinner.`)
