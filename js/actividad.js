
let numbers = [];


for (let i = 0; i < 10; i++) {
  numbers[i] = parseInt(prompt("Por favor ingrese un número entero:"));
}

let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positive++;
  } else if (numbers[i] < 0) {
    negative++;
  } else {
    zero++;
  }
}

// Ver resultado
console.log(`Hay ${positive} números positivos, ${negative} números negativos y ${zero} ceros en el array.`);
