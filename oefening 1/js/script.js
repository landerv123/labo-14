let numbers = [];
let Stoppen = false;
let som = 0;
let input = 0;

do {
  input = prompt("geef een getall is of stop om te stoppen");
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
