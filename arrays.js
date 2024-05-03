const listColors = ['white', 'black', 'red', 'blue'];

// aqui podemos salvar o retorno do acesso ao índice do array em uma variável ou constante
const storAge = listColors;
console.log(listColors);

// altera o valor de um elemento de um array
listColors[0] = 'yellow';
console.log(listColors);

// unshift adiciona um novo valor de um elemento array no inicio da lista
listColors.unshift('purple');
console.log(listColors);

// push adiciona um novo valor de um elemento array no final da lista
listColors.push('green');
console.log(listColors);

// shift remove um valor de um elemento array no inicio da lista
listColors.shift('purple');
console.log(listColors);

// pop remove um valor de um elemento array no final da lista
listColors.pop('green');
console.log(listColors);