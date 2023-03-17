// define an object
const car = {
    brand: "BMW",
    model: "X5",
    year: 2016
};

// add field to object
car.price = 547154;
car['country'] = 'Germany';

console.log(car);
console.log(car.brand);
console.log(car['brand']);

//////////////////

const cars = [
    {
        brand: 'Nissan',
        model: 'Micra',
        year: 2019
    },
    {
        brand: 'MB',
        model: 'S-Class',
        year: 2020
    }
];

console.log(cars[1].brand);