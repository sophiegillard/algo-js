//Create a function named rand10() that returns a random integer between 1 and 10. 
//Create a program that will display the result of that function each time it is run.

//Write a documentation for the rand10() function.

//You will have to search on Google how to generate random numbers in JavaScript for this exercise.



function getRand10(max=10) {
  return Math.floor(Math.random() * max);
}

console.log(getRand10());
