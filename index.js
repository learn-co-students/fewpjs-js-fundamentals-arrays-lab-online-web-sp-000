// Write your solution here!
// "Append" means "add to the end" and "prepend" means "add to the beginning."
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

// Append the pet "Odie" to the end of append.
append.push("Odie");
// Prepend the pet "Odie" to the beginning of prepend.
prepend.unshift("Odie");
// Remove the last pet from removeLast.
removeLast.pop();
// Remove the first pet from removeFirst.
removeFirst.shift();