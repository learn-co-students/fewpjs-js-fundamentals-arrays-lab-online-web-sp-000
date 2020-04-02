// Write your solution here!
const append = ["Milo", "Otis", "Garfield"],
      prepend = append.slice(),
      removeLast = append.slice(),
      removeFirst = append.slice();

append.push("Odie");
prepend.unshift("Odie");
removeLast.pop();
removeFirst.shift();
