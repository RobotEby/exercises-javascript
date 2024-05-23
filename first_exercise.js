// Exercício 1

// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:
let num1 = 10;
let num2 = 5;

console.log('Soma: ' + (num1 + num2));
console.log('Subtração: ' + (num1 - num2));
console.log('Multiplicação: ' + (num1 * num2));
console.log('Divisão: ' + (num1 / num2));
console.log('Módulo: ' + (num1 % num2));

// Exercício 2

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
let num3 = 20;
let num4 = 21;

if (num3 > num4) {
  console.log(num3 + " é maior que " + num4);
} else if (num3 === num4) {
  console.log("Os números são iguais.");
} else {
  console.log(num3 + " é maior que " + num1);
};

// Exercício 3

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.
let num5 = 6;
let num6 = 4;
let num7 = 2;

if (num5 > num6 && num5 > num7) {
  console.log('O maior número é: ' + num5);
} else if (num6 > num5 && num6 > num7) {
  console.log('O maior número é: ' + num6);
} else if (num7 > num5 && num7 > num6){
  console.log('O maior número é: ' + num7);
} else {
  console.log('IIHH, tem números iguais!');
};

// Exercício 4

// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if (allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}