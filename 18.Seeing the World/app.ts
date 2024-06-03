let places : string []= ['Canada', 'Denmark', 'Faisalabad', 'Bnagladesh', 'Ahmedabad']
console.log('orignal  :' + places)

// Print your array in alphabetical order without modifying the actual list
console.log('copy '+ [...places].sort()); 
console.log(places) 

// show that your array is still its orignal order 

console.log('orignal '  + places);

// print your array in reverse alphabetical  order  without changing the order of the orignal list
console.log('copy '+ [...places].sort().reverse());

// show that your array is its orignal order by printing it again
console.log('copy '+ [...places].sort().reverse());

// Reverse the order of your list. print the array to show that its order has changer
console.log('orignal '  + places.sort());

//Reverse the order of your list. Print the array to show that its order has changed.
console.log('orignal '  + places.sort().reverse());
// sort your ayyay  so its stored in alphabetical order
console.log('copy '+ [...places].sort());