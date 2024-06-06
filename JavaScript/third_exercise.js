// Manipulação de objetos: Parte 1
// Com base neste objeto, faça os exercícios a seguir.
const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };
  
//   Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}"`);

// Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

reader.favoriteBooks.push (
{
title: 'Harry Potter e o Prisioneiro de Azkaban',
author: 'JK Rowling',
publisher: 'Rocco', 
  }
);
  console.log(reader);

//   Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
// “Julia tem {quantidade} livros favoritos.”
// {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:
// “Julia tem 1 livro favorito.”

const numFavoriteBooks = reader.favoriteBooks.length

numFavoriteBooks > 1
console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito`);
console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos`);

// Manipulação de objetos: Parte 2
// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:
const order = {
name: 'Arthur Morgan',
phoneNumber: '77-7777-7777',
address: {
street: 'Rua Baú',
number: '266',
apartment: '210',
    },

order: {
pizza: {
marguerita: {
amount: 1,
price: 25,
},

pepperoni: {
amount: 1,
price: 20,
},
},

drinks: {
coke: {
type: 'Coca-Cola Zero',
price: 10,
amount: 1,
},
},
  
delivery: {
deliveryPerson: 'Elliot Alderson',
price: 5,
},
},
  
payment: {
total: 60,
},
};

const customerInfo = (fullOrder) => {
// Adicione abaixo as informações necessárias.
const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
const costumerName = fullOrder.name;
const phoneNumber = fullOrder.phoneNumber;
const street = fullOrder.address.street;
const adressNumber = fullOrder.address.number;
const apartment = fullOrder.address.apartment;
  return `Olá ${deliveryPerson} entrega para: ${costumerName} Telefone: ${phoneNumber}, ${street}, Número: ${adressNumber} AP: ${apartment}`
  }
  console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
  fullOrder.name = 'Luiz Silva';
  fullOrder.payment.total = 50;
  const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
  return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$ ${fullOrder.payment.total},00.`
  }
  console.log(orderModifier(order));