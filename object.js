let person = {
    name: 'John',
    age: 21,
};

console.log(person);

let car = {
    make: 'Toyota',
    model: 'carmy',
    year: 2022,
    isElectrical: false,
    start: function() {
        console.log("Engine started");
    }
};

console.log(car.make);
// console.log(car.start());
car.start();
// console.log(typeof(car));