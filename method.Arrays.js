// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];
const convertToFahrenHeit = () => {
  let temperaturesFahrenHeit = temperaturesCelsius.map((temperature) => {
    return (temperature * 9) / 5 + 32;
  });
  return temperaturesFahrenHeit;
};
console.log(convertToFahrenHeit());

const numbers = [4, 9, -1, 16, -5, 25];
const calculateSquareRoots = (numbers) => {
  let squareRoots = numbers.map((number) => {
    if (number >= 0) {
      return Math.sqrt(number);
    } else {
      return NaN;
    }
  });

  return squareRoots;
};
console.log(calculateSquareRoots(numbers));

const people = [
  { name: "João", age: 25 },
  { name: "Maria", age: 30 },
  { name: "Pedro", age: 20 },
  { name: "Ana", age: 35 },
];

const peopleY = people
  .filter((people) => people.age >= 30)
  .map(({ age, name }) => ({ age, name }));
console.log(peopleY);

const players = [
  { name: "Michael Jordan", height: 198, team: "Chicago Bulls" },
  { name: "LeBron James", height: 203, team: "Los Angeles Lakers" },
  { name: "Kobe Bryant", height: 198, team: "Los Angeles Lakers" },
  { name: "Stephen Curry", height: 191, team: "Golden State Warriors" },
  { name: "Kevin Durant", height: 211, team: "Brooklyn Nets" },
];

const filterHighPlayers = (players) => {
  return players.filter(({ height }) => height >= 200);
};

const highPlayers = filterHighPlayers(players);
console.log(highPlayers);

const peopleU = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

people.sort((peopleY, peopleX) => peopleX.age - peopleY.age);
console.log(peopleU);

const pokemons = [
  { name: "Pikachu", type: "Elétrico", level: 25 },
  { name: "Charizard", type: "Fogo", level: 50 },
  { name: "Bulbasaur", type: "Planta", level: 10 },
  { name: "Gyarados", type: "Água", level: 40 },
  { name: "Alakazam", type: "Psíquico", level: 35 },
  { name: "Snorlax", type: "Normal", level: 50 },
  { name: "Mewtwo", type: "Psíquico", level: 70 },
  { name: "Dragonite", type: "Dragão", level: 55 },
  { name: "Mew", type: "Psíquico", level: 30 },
  { name: "Articuno", type: "Gelo", level: 60 },
  { name: "Zapdos", type: "Elétrico", level: 60 },
  { name: "Moltres", type: "Fogo", level: 60 },
  { name: "Gengar", type: "Fantasma", level: 45 },
  { name: "Machamp", type: "Lutador", level: 50 },
  { name: "Lapras", type: "Água", level: 35 },
  { name: "Venusaur", type: "Planta", level: 45 },
  { name: "Blastoise", type: "Água", level: 55 },
  { name: "Golem", type: "Pedra", level: 40 },
  { name: "Arcanine", type: "Fogo", level: 55 },
  { name: "Jolteon", type: "Elétrico", level: 40 },
];

const filterStrongPokemons = (pokemons) => {
  return pokemons.filter(({ level }) => level > 30);
};

const strongPokemons = filterStrongPokemons(pokemons);
console.log(strongPokemons);

const getStrongPokemonNames = (pokemons) =>
  pokemons.filter(({ level }) => level > 50).map(({ name }) => name);
console.log(getStrongPokemonNames(pokemons));

pokemons.sort((pokemonsX, pokemonsY) => pokemonsX.level - pokemonsY.level);
console.log(pokemons);

const sortPokemons = (pokemons) => {
  return pokemons.sort(
    ({ level: levelY, name: nameY }, { level: levelX, name: nameX }) => {
      if (levelY === levelX) {
        return nameY.localeCompare(nameX);
      } else {
        return levelX - levelY;
      }
    }
  );
};

console.log(sortPokemons(pokemons));

const songs = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

// Adicione seu código aqui
const source = songs.find((songs) => songs.id === "31031685");
console.log(source);

const contacts = [
  { name: "João", phone: "123456789" },
  { name: "Maria", phone: "987654321" },
  { name: "Pedro", phone: "456123789" },
  { name: "Ana", phone: "789456123" },
  { name: "Carlos", phone: "321654987" },
  { name: "Mariana", phone: "654123987" },
  { name: "Lucas", phone: "987321654" },
  { name: "Laura", phone: "123789456" },
  { name: "Tiago", phone: "789123456" },
  { name: "Beatriz", phone: "456789123" },
];

const searchContact = (contacts, name) => {
  const foundContact = contacts.find((contacts) => contacts.name === name);

  if (foundContact) {
    return { ...foundContact };
  }
  return "Contato não encontrado";
};
console.log(searchContact(contacts, "ana"));

const cartoons = [
  { title: "Tom & Jerry", ageRating: "Livre" },
  { title: "Scooby-Doo", ageRating: "Livre" },
  { title: "Looney Tunes", ageRating: "Livre" },
  { title: "The Simpsons", ageRating: 12 },
  { title: "Avatar: The Last Airbender", ageRating: "Livre" },
  { title: "Pokémon", ageRating: "Livre" },
  { title: "Dragon Ball Z", ageRating: 12 },
  { title: "Adventure Time", ageRating: "Livre" },
  { title: "Gravity Falls", ageRating: "Livre" },
  { title: "Teen Titans Go!", ageRating: "Livre" },
];

const addGender = (cartoons) =>
  cartoons.forEach((cartoon) => (cartoon.gender = "animação"));
addGender(cartoons);
console.log(cartoons);

const countries = [
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
  {
    name: "Brazil",
    region: "Americas",
    currencies: [{ code: "BRL", name: "Brazilian Real" }],
    capital: "Brasília",
    population: 213993437,
    area: 8515767,
  },
  {
    name: "Canada",
    region: "Americas",
    currencies: [{ code: "CAD", name: "Canadian Dollar" }],
    capital: "Ottawa",
    population: 38008005,
    area: 9976140,
  },
  {
    name: "China",
    region: "Asia",
    currencies: [{ code: "CNY", name: "Chinese Yuan" }],
    capital: "Beijing",
    population: 1439323776,
    area: 9640011,
  },
  {
    name: "France",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Paris",
    population: 67022000,
    area: 551695,
  },
  {
    name: "India",
    region: "Asia",
    currencies: [{ code: "INR", name: "Indian Rupee" }],
    capital: "New Delhi",
    population: 1393409038,
    area: 3287263,
  },
  {
    name: "Mexico",
    region: "Americas",
    currencies: [{ code: "MXN", name: "Mexican Peso" }],
    capital: "Mexico City",
    population: 126190788,
    area: 1964375,
  },
  {
    name: "Russia",
    region: "Europe/Asia",
    currencies: [{ code: "RUB", name: "Russian Ruble" }],
    capital: "Moscow",
    population: 146599183,
    area: 17098242,
  },
  {
    name: "South Africa",
    region: "Africa",
    currencies: [{ code: "ZAR", name: "South African Rand" }],
    capital: "Pretoria",
    population: 59308690,
    area: 1221037,
  },
  {
    name: "United States",
    region: "Americas",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Washington, D.C.",
    population: 331449281,
    area: 9629091,
  },
];

countries.forEach((countrie) => (countrie.planet = "Earth"));
console.log(countries);

const addNewObject = [];

countries.forEach((newObject) => {
  const addNewinfo = {
    name: newObject.name,
    currencyCode: newObject.currencies[0].code,
    currencyName: newObject.currencies[0].name,
  };

  addNewObject.push(addNewinfo);
});
console.log(addNewObject);

const Countryfavorite = (countries, countryName) => {
  const country = countries.find((country) => country.name === countryName);
  if (!country) throw new Error("País não encontrado!");

  return countryName;
};
console.log(Countryfavorite(countries, "Brazil"));

const newCountry = {
  name: "Germany",
  region: "Europe",
  currencies: [{ code: "EUR", name: "Euro" }],
  capital: "Berlin",
  population: 83190556,
  area: 357386,
};

const copyNewArrayCountries = (countries, newCountry) => [
  ...countries,
  newCountry,
];
console.log(copyNewArrayCountries(countries, newCountry));

const arrOfNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const sum = (accumulator, currentValue) =>
  currentValue % 2 === 0 ? accumulator + currentValue : accumulator;
const sumOfNumbersPair = (arr) => arr.reduce(sum, 0);
console.log(sumOfNumbersPair(arrOfNumbers));

const students = [
  {
    name: "Jorge",
    lastName: "Silva",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 67 },
      { name: "Português", grade: 79 },
      { name: "Química", grade: 70 },
      { name: "Biologia", grade: 65 },
    ],
  },
  {
    name: "Mario",
    lastName: "Ferreira",
    age: 15,
    turn: "Tarde",
    courses: [
      { name: "Matemática", grade: 59 },
      { name: "Português", grade: 80 },
      { name: "Química", grade: 78 },
      { name: "Biologia", grade: 92 },
    ],
  },
  {
    name: "Jorge",
    lastName: "Santos",
    age: 15,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 76 },
      { name: "Português", grade: 90 },
      { name: "Química", grade: 70 },
      { name: "Biologia", grade: 80 },
    ],
  },
  {
    name: "Maria",
    lastName: "Silveira",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 91 },
      { name: "Português", grade: 85 },
      { name: "Química", grade: 92 },
      { name: "Biologia", grade: 90 },
    ],
  },
  {
    name: "Natalia",
    lastName: "Castro",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 70 },
      { name: "Português", grade: 70 },
      { name: "Química", grade: 60 },
      { name: "Biologia", grade: 50 },
    ],
  },
  {
    name: "Wilson",
    lastName: "Martins",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 80 },
      { name: "Português", grade: 82 },
      { name: "Química", grade: 79 },
      { name: "Biologia", grade: 75 },
    ],
  },
];

const bestGrade = (acc, course) => (acc.grade > course.grade ? acc : course);

const reportBestGrade = (students) =>
  students.map((student) => {
    return {
      name: student.name,
      course: student.courses.reduce(bestGrade).name,
    };
  });
console.log(reportBestGrade(students));

const greeting = (name, message = "Olá") =>
  console.log(`${message} ${name}, tudo bem?`);

greeting("João");

const multiply = (a, b = 1) => {
  return a * b;
};
console.log(multiply(5, 3));
console.log(multiply(5));
