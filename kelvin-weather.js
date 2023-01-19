// Sets variable kelvin to constant of 293 (today's forecast). 
const kelvin = 293;

// Sets today's forecast in celsius ()273 degrees lower than kelvin)
let celsius = kelvin - 273;

// Calculating today's forecast in fahrenheight, from celsius
let fahrenheit = celsius * (9/5) + 32;

// Round temperature in fahrenheight down to the nearest integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); 
/* Results:
 293 kelvin = 68 fahrenheit
 0 kelvin = -460 fahrenheit
 */

// Bonus practice for Newton
let newton = celsius * (33/100);
newton - Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);