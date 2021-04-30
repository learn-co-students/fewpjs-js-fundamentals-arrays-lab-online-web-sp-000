const pets = ["Milo", "Otis", "Garfield"];

const append = [...pets, 'Odie']
// or pets.push('Odie')

const prepend = ['Odie', ...pets];
// or pets.unshift('Odie')

const removeLast = pets.slice();
const removeFirst = pets.slice();

removeLast.pop();
removeFirst.shift();
