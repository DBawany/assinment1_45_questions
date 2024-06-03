let guestList : string[]=['Ozair','Junaid','Danish','Ali'];
// for (let i=0;  i<guestList.length; i++){
//     console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n')
// }
let notPresent :string = 'Junaid';
let new_guest :string = 'Ovais';
guestList[1] = new_guest
// for (let i=0;  i<guestList.length; i++){
//     console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow.\n\n Thankyou\n')
// }
guestList.unshift('Haroon','Adeel','Asim');
// for (let i=0;  i<guestList.length; i++){
//     console.log('Respected sir' + guestList[i] + ',\n We invited you on dinner Tomorrow. We found a bigger table so we decide to invite more guests\n\n Thankyou\n')
// }
console.log('\n Unfortunately we can not arrange big table . only two person allow ')
while(guestList.length>2){
    let remove_guest = guestList.pop();
    console.log(`Sorry sir  ${remove_guest} you are not invited for dinner.`);

}
for(let i=0; i<guestList.length; i++){
  console.log('respected sir'   + guestList[i] +  ',\n yes you are still invited on tomorrow dinner  \n Thankyou \n' )
}
guestList.slice(0,2)
console.log(guestList)