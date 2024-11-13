const arr = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(arr);

const sum = arr.reduce((maxArr, elementoAtual) => {
  return maxArr + elementoAtual;
});
console.log(sum);

const media = arr.reduce((accumulator, element) => accumulator + element, 0);
const arrTotal = media / arr.length;
console.log(arrTotal);

// media = 0;
// for (let index = 0; index < numbers.length; index++) {
//   media += numbers[index];
// }
// const mediaTotal = sum / numbers.length;
// console.log(mediaTotal);

if (arrTotal > 20) {
  console.log("O valor da média aritmética é maior que 20");
} else if (arrTotal < 20) {
  console.log("O valor da média aritmética é menor ou igual a 20.");
}

let maxArr = arrTotal;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] > maxArr) {
    maxArr = arr[index];
  }
}
console.log(maxArr);

let imp = [];
let par = [];

for (let n of arr) {
  if (n % 2 == 0) {
    par.push(n);
  } else {
    imp.push(n);
  }
  console.log("Even numbers are:", ...par);
  console.log("Odd numbers are:", ...imp);
}
