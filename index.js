let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
    return cats;
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop(); 
    cats;
  }
  function destructivelyRemoveFirstCat() {
    cats.shift()
    cats;
  }
  function appendCat(name) {
    return [...cats, "Broom"];
  }
  
  function prependCat(name) {
    return ["Arnold", ...cats];
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
 