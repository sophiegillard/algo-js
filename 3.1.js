let arr =["Julien", "Titouan", "Quentin", "Xavier", "Sophie", "Stéphanie", "Vincent"];
for(let elem of arr){
    console.log("Welcome "+ elem);
}

for (let i = 0; i < arr.length; i += 1) {
    console.log("Do you want to eat a " + arr[i] + "?");
  }