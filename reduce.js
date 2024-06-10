  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 10); 
//The comma is separating the 1st and 2nd parameters to reduce(): the callback function and the initial value
console.log(sum);


let sum3 = nums.reduce((acc, curr) => acc + curr); 
//The comma is separating the 1st and 2nd parameters to reduce(): the callback function and the initial value
console.log("curr or current value starts at the second value if it's not told what number to start on. in this case, current value is 1", sum3);
console.log(sum3);

let sum1 = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator", acc,
    "Current Value:", curr,
    "Total:", acc + curr
  );
  return acc + curr;
}, 10);
console.log(sum1);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
