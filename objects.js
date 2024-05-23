const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Exercício 1

// Crie uma variável chamada player e atribua a ela um objeto que reúna todas as informações das variáveis listadas.
const player = {name, lastName, age, medals, bestInTheWorld};

//  Exercício 2

//  Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave, concatene as informações e armazene na variável message no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
let message = `A Jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`;
console.log(message);

// Exercício 3

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e armazene na variável achievements a quantidade de títulos no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
let achievements = `A Jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes.`;
console.log(achievements);

// Adicionando novas propriedades
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };

  // Criação da função
const addProperty = (object, key, value) => {
if (typeof object[key] === "undefined") {
    object[key] = value;
  }
};

addProperty(customer, 'email');
addProperty(customer, 'fone');
addProperty(customer, 'userGithub');
addProperty(customer, 'linkedIn');

// Exibe o objeto transformado
console.log(customer);