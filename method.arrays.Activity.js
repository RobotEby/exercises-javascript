const countries = [
    {
        name: 'Afghanistan',
        region: 'Asia',
        currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
        capital: 'Kabul',
        population: 40218234,
        area: 652230,
    },
    {
        name: 'Aland Islands',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Mariehamn',
        population: 28875,
        area: 1580,
    },
    {
        name: 'Albania',
        region: 'Europe',
        currencies: [{ code: 'ALL', name: 'Albanian lek' }],
        capital: 'Tirana',
        population: 2837743,
        area: 28748,
    },
    {
        name: 'Algeria',
        region: 'Africa',
        currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
        capital: 'Algiers',
        population: 44700000,
        area: 2381741,
    },
    {
        name: 'American Samoa',
        region: 'Oceania',
        currencies: [{ code: 'USD', name: 'United States Dollar' }],
        capital: 'Pago Pago',
        population: 55197,
        area: 199,
    },
    {
        name: 'Andorra',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Andorra la Vella',
        population: 77265,
        area: 468,
    },
    {
        name: 'Angola',
        region: 'Africa',
        currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
        capital: 'Luanda',
        population: 32866268,
        area: 1246700,
    },
    {
        name: 'Anguilla',
        region: 'Americas',
        currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
        capital: 'The Valley',
        population: 13452,
        area: 91,
    },
];

const getPopulation = () => {
    return countries.reduce((acc, curr) => acc + curr.population, 0);
};
console.log(getPopulation());

const resultExpected = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199,
};

const longestName = () => {
    return countries.reduce((acc, curr) =>
        acc.name.length > curr.name.length ? acc : curr
    );
};
console.log(longestName());

const totalArea = (region = 'Europe') => {
    return countries.reduce((acc, country) => {
        if (country.region === region) {
            return acc + country.area;
        }
        return acc;
    }, 0);
};
console.log(totalArea()); // adicionar objeto dentro da função

const getLargestCountriesByRegion = () => {
    const calculateRegion = countries.reduce((acc, country) => {
        if (!acc[country.region] || country.area > acc[country.region].area) {
            acc[country.region] = { name: country.name, area: country.area };
        }
        return acc;
    }, {});
    return calculateRegion;
};
console.log(getLargestCountriesByRegion());
