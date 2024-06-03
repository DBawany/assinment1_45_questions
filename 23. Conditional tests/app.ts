let cars: string = 'subaru'

//   test 1: Equality comparison(true)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru');//true

//test 2: Strict equality comparision (true)
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru');//true
// test 3: Inequality comparision(false)
console.log("Is car != 'subaru'? I predict false.");
console.log(cars != 'subaru');//false

// test 4 : Strick Inequality comparision9false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(cars !== 'subaru');//false

//test 5 less than comparision(false)
console.log("Is car < 'subaru'? I predict false.");
console.log(cars < 'subaru');//false (lexicographic comparision)

// test 6: Greater than comparision(false)
console.log("Is car > 'subaru'? I predict false.");
console.log(cars > 'subaru');//false (lexicographic comparision)

// test 7: lessthan or equal comparision(true)
console.log("Is car <= 'subaru'? I predict true.");
console.log(cars <= 'subaru');//true

// test 8: greater than or equal comparision(true)
console.log("Is car >= 'subaru'? I predict true.");
console.log(cars >= 'subaru');//true

// test 9: Checking truthiness(True)
console.log("Is car ? I predict true.");
console.log(cars);// True(non empty  string is truthy)

// test 10: Checking falsiness(false)
console.log("Is !car ? I predict false.");
console.log(!cars);// False(negation of a truthy value)