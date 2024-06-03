let car: string = 'subaru';
let age: number = 25;
let numbers: number[]  = [1,2,3,4];


// **string tests**

// test 1: Equality(true)
console.log("Is car == 'Subaru'? I predict true.");
console.log(car== 'Subaru');// true (case insensitive) 

// test 2: Strict Equality(false)
console.log("Is car === 'Subaru'? I predict false.");
console.log(car=== 'Subaru');// false (case sensitive) 

//  Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); // True

//  Test 4: Inequality (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False (case-sensitive)

//  **Lowercase Function Tests**

// Test 5: Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

// Test 6: Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)

// **Numerical Tests**

// Test 7: Equality (True)
console.log("Is age ==25? I predict true");
console.log(age ==25); //true

// Test 8: Inequaliry(false)
console.log("Is age != 30? I predict false");
console.log(age !=30);


// Test 9: Greater than(false)
console.log("Is age > 30? I predict false");
console.log(age > 30);// false

// Test 10 Less than or equal(true)
console.log("Is age <=25? I predict true.");
console.log(age<= 25); //true

//**  Logical operators **

// test 11: And(true)
console.log("Is age > 20 && age < 30 ? i predict true.");
console.log(age > 20 && age < 30);// true both conditions met

// test 12: Or(false)
console.log("Is age > 30 || age < 18 ? i predict false.");
console.log(age > 30 || age < 18);// false neither  condition met

// ** Array tests**

// Test 13 : In array (true)
console.log("Is 3 in numbers? I predict true");
console.log(3 in numbers);// True(checks for index existence)


// Test 14 : In array (true)
console.log("Is 5 in numbers? I predict false");
console.log(5 not in numbers);// false



