let firsName = [];
let lastName = [];
let Stoppen = false;
let input1 = "";
let input2 = "";

do {
  input1 = prompt("geef de voornaam ");
  if (input == "stop") {
    Stoppen = true;
  } else {
    numbers.push(input);
    alert(numbers);
  }
} while (!Stoppen);

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  element = Number(element);
  som = som + element;
  alert(som);
  console.log(som);
}
