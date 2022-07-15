let min= prompt("Please enter 3 numbers: min, max and current. Start with min:");
let max= prompt("Add max:");




if (min>max) {
    alert("Go back to school! You're stupid and bad at math!");
}
else{
    let current= prompt("And now the current number:");

    if (min<current<max){
    alert("Your number is "+ current);   
    }
}