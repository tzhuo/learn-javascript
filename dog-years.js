// setting my age
let myAge = 29;

// saving an early age
let earlyYears = 2;

earlyYears *= 10.5;

// setting variable for every age after 2
let laterYears = myAge - 2;

// calculating # of dog years accounted for by my later years after age 2
laterYears *= 4;

/*
console.log(earlyYears);
console.log(laterYears);
*/

// calculating my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// setting my name in lowercase letters as a variable
let myName = 'Tina'.toLowerCase();

// telling the world my name, age, and dog age
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)