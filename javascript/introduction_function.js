// Adiciona um valor ao balance;
const balance = 100;

function sumBalance(value) {
  return value + balance;
};
console.log(sumBalance(300));

// Subtraia um valor do balance;
function subBalance(value) {
  return balance - value;
};
console.log(subBalance(50));

// Multiplique o valor do balance por uma taxa;
function multBalance(value) {
  return value * balance;
};
console.log(multBalance(2));

// Divida o valor do balance.
function divBalance(value) {
  return balance / value;
};
console.log(divBalance(5));

// Faça um programa para adicionar pessoas clientes ao array do TrybeBank. A função deve se chamar addCustomer e receber um parâmetro do tipo string e, caso o parâmetro não seja do tipo string, retorne a mensagem: “O parâmetro passado deve ser do tipo string”. 
const bank = ['Arthur', 'Ellie', 'Sarah'];
console.log(bank);

function addCustomer(customer) {
  if (typeof customer != 'string') {
    return 'O parâmetro passado deve ser do tipo string!';
  }
  console.log(addCustomer(true));

  bank.push(customer);
  return 'Pessoa adicionada com sucesso!';
};
console.log(addCustomer('Derek'));


// Exercício 2
const accountBank = ['Elliot', 'Marcos', 'Lyan'];

function addCustomers(customers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] === 'string') {
      customers.push(newCustomers[index]);
    } else {
      return 'Todos os valores precisam ser strings.';
    }
  }
  return accountBank;
};

console.log(addCustomers(accountBank, ['John', 'Joel']));
console.log(addCustomers(accountBank, ['Morgan', 78]));