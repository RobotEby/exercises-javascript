const num1 = 1;
const num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let firstNumber = 10;
let secondNumber = 20;

if (firstNumber > secondNumber) {
    console.log(firstNumber);
} else {
    console.log(secondNumber);
}

const numberOne = 100;
const numberTwo = 120;
const numberThree = 130;

if (numberOne > numberTwo && numberTwo > numberThree) {
    console.log(numberOne);
} else {
    console.log(numberThree);
}

function verifityTriangle(angle1, angle2, angle3) {
    if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
        return "Erro: Um ou mais ângulos são inválidos.";
    } else if (angle1 + angle2 + angle3 === 180) {
        return true;
    } else {
        return false;
    }
}

const angle1 = 60;
const angle2 = 60;
const angle3 = 60;

console.log(verifityTriangle( angle1, angle2, angle3));
