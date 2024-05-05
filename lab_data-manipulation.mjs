// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add all numbers to add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`All numbers should add up to 50: ${isSum50}`);

/* Check two: at least two odd numbers
 Here, we use modulus to check if something is odd.
Since % 2 is 0 if even and 1 if odd, we can use
arithmetic to count the total number of odd numbers. */
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`At least two numbers in this sequence are odd: ${isTwoOdd}`);

/* Check three: to check if all numbers are less than or equal to 25. */
const isless25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;
console.log(`All numbers should be less than or equal to 25: ${isless25}`);

/* Check four: all unique numbers
This is long, and there are more efficient
ways of handling it with other data structures
that we will review later.*/
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`All numbers should be unique: ${isUnique}`);

/* Here, we put the results into a single variable 
for convenience. Note how we negate isOver25 using
the ! operator. We could also have tested for 
"isUnder25" as an alternative.  */
const isValid = isSum50 && isTwoOdd && isless25 && isUnique;
console.log(`All numbers should reach all given criteria: ${isValid}`);

/* Checked to see if all numbers are divisible by 5. Used modulus % on all numbers against
5 to give 0. And then checked if the sum of all remainders. If the sum is 0, then all numbers are
divisible by 5.*/
const isDiv5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(`All numbers should be divisible by 5: ${isDiv5}`);

// check to see if the first number (n1) is greater than the last number (n4)
const firstlast = (n1 > n4);
console.log(`The first number should be larger than the last number in sequence: ${firstlast}`);

/* created variable that subtracted n1 from n2, then multiplied that amound by n3, 
but then finding the remainder of that number when divided by n4. */
const lolwut = (((n2 - n1) * n3) % n4);
console.log(`The remainder to this equation should be: ${lolwut}`);

// Log the results in a variable.
console.log(`All numbers should reach all given criteria: ${isValid}`);

//Created variables for the trip cost. I separated the var's into how many mpg at what mph. 
const overalMiles = 1500;
const gasAt55 = 30; //gasAt var reflects the mph while the value represents the mpg
const gasAt60 = 28;
const gasAt75 = 23;
const budget = 175;
const gasCost = 3;
const slow = 55;
const speedlimit = 60;
const abitfast = 75;

// Calculate total amount of gas used in trip
const totalgasSlow = (overalMiles / gasAt55);
const totalgasLimit = (overalMiles / gasAt60);
const totalgasbitFast = (overalMiles / gasAt75);

// print results
const totalGallons = (`Total amount of gas at 55 mph: ${totalgasSlow} gallons \n
Total amount of gas at 60 mph: ${totalgasLimit} gallons \n
Total amount of gas at 75 mph: ${totalgasbitFast} gallons`);

console.log(totalGallons)

// Compare total amount of gas used in trip with the budget var
const budgetSlow = ((gasCost * totalgasSlow) <= budget);
const budgetLimit = ((gasCost * totalgasLimit) <= budget);
const budgetFast = ((gasCost * totalgasbitFast) <= budget);

// print results
const budgetFriendly = (`Traveling at 55 mph is within budget: ${budgetSlow} \n
Traveling at 60 mph is within budget: ${budgetLimit}  \n
Traveling at 75 mph is within budget: ${budgetFast} `);

console.log(budgetFriendly);

// calculate total amount of hours in the trip by dividing the target miles with the mph
const hoursSlow = (overalMiles / slow);
const hoursLimit = (overalMiles / speedlimit);
const hoursFast = (overalMiles / abitfast);

// print results
const totalHours = (`Traveling at 55 mph the trip will take: ${hoursSlow} hours.\n
Traveling at 60 mph the trip will take: ${hoursLimit} hours. \n
Traveling at 75 mph the trip will take: ${hoursFast} hours.`);


console.log(totalHours);










































































  