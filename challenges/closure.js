// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//  When myFunction is created a new scope is created, a functional scope. Then the function or/and variables created within that scope have the ability to reach outward for context, never inward, and no matter how deep you nest.  Thats why internal is able to reach out and get its information. 



/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function sumation(num){
 for(let i = 0; i <= num; i++){

    let total = 1 + [i];
    
    return total
 }

}

console.log(sumation(4))
