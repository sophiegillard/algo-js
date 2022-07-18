//Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
//Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle.
// That program must use the function you created.

//Write a documentation for the calcSurface function.

// This function ask the user to enter the width and height of the rectangle and then give back the answer.
let calcSurface = (a,b) => a * b;

function surface(){
    wid = parseInt(prompt("Enter the width"));
    heig= parseInt(prompt("Enter the height"));
    alert(calcSurface(wid, heig) + " m2");
}

surface();