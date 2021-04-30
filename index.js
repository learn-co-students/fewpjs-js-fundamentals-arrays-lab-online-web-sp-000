const pets = ["Milo", "Otis", "Garfield"];

const append = [...pets, 'Odie']
// or pets.push('Odie')

const prepend = ['Odie', ...pets];
// or pets.unshift('Odie')

// use .slice to create a copy of pets array.
const removeLast = pets.slice();
const removeFirst = pets.slice();

removeLast.pop();
removeFirst.shift();
