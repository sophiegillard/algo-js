//Make a program that ask the user to enter a number between 1 and 7. 
//Depending on the number, display the day of the week that correspond. 
//(1 => Monday, 2 => Tuesday, etc...)

var day = prompt("Enter a number between 1 and 7");

switch(day){
    case "1":
        alert("Monday");
        break;
    case "2":
        alert("Tuesday");
        break;
    case '3':
        alert("Wed");
        break;
    case "4":
        alert("Thur");
        break;
    case "5":
        alert("Fri");
        break;  
    case "6":
        alert("Sat");
        break;
    case "7":
        alert("Sun");
        break;     
}