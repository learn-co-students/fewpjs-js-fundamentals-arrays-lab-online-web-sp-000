// Write your solution here!
const append = ["Milo", "Otis", "Garfield"];
const prepend = append.slice();
const removeLast = append.slice();
const removeFirst = append.slice();

append.push("Odie");
prepend.unshift("Odie");
removeLast.pop();
removeFirst.shift()
