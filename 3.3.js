//Exercise 3.3

//Write a program that will create a duplicate of a given array.

//Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on MDN or Google for this one.)

var a= ["sophie", "Sam", "Marie"];
var test =[];

for (const elem of a) {
    test.push(elem);
}
console.log(test);


//function MDN
let aCopy = a.slice();
console.log(aCopy);
