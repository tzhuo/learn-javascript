// assigns random race number
let raceNumber = Math.floor(Math.random() * 1000);

// indicates whether a runner registered early
let registeredEarly = true;

// runner's age; >18 is adult
let runnerAge = 18;

// checks whether runner is adult AND registered early
(runnerAge > 18 && registeredEarly) ? raceNumber += 1000 : raceNumber;

/* This also works:
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
} else {
  raceNumber;
}
*/

// Determines race time based on age and registration time
if (runnerAge > 18 && registeredEarly) {
  console.log(`As an early registrant, you will run at 9:30am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`As a late registrant, you will run at 11:00am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(
    `Youth registrants run at 12:30pm (regardless of registration). Your race number is ${raceNumber}.`
  );
} else {
  console.log(
    `Please see the registration desk. Your race number is ${raceNumber}.`
  )
};

// Used below to check age and registration status
// console.log(runnerAge + ' ' + registeredEarly);