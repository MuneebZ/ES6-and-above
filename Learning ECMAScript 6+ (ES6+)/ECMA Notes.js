// var, let and const help define how variables work in JavaScript.
// They differ in 3 way: Use, Scope, Hoisting
// USE: var can be re-declared and updated; let can only be updated; const is only used once.
// SCOPE: var can be a global or function scope; const and let are block scope variables

var medicine;
function doExperiment() {
  medicine = "cough syrup";
  console.log(medicine);
}

function doExperiment() {
  var medicine = "cough syrup";
  console.log(medicine);
}

function doExperiment() {
  let medicine = "cough syrup";
  if (medicine !== "aspirin") {
    const message = "not aspirin";
    console.log(message);
  }
}

// There's an extra step that occurs when your browser loads your code. Before running, JS analyses and prepares the code for running.
// One thing that happens during this is called HOISTING, variable and function declerations are moved to the top of their scope.
// If they're not initialised, var declerations will be given an undefined value. For example:

var temp = 86;

tempC();

console.log(temp);

function tempC() {
  console.log(temp);
  var temp = 50;
  temp = (temp - 32) / console.log(temp);
}

// undefined, null and empty are absent types and values used when objects or varibale containers don't have any values.

let customer = [{}, null];

customer[0].name = "Ray";
customer[0].type = "Cappuccino";
customer[0].cream = "Heavy Cream";
customer[0].sweetner = "Sugar";
customer[0].sweetnerQty = 2;

// Type coercion is either implicit or explicit:

if (true) {
  doSomething();
}

if (Boolean("false")) {
  doSomething();
}

let recipeName;
recipeName = null;
recipeName = "";

if (recipeName) {
  startCooking();
}

// The ternary operator is designed to help us make quick work of conditional statements -> CONDITION ? TRUTHY : FALSY

let someVar;

someVar = true ? true : false;

// Equivalent representation of above code:

if (true) {
  someVar = true;
} else {
  someVar = false;
}

// Example of a ternary operator in action: Programming to control movement of the ship

let ship = document.querySelector("#ship");
ship.src = "img/ship.svg";
ship.style.width = "50px";

let posLeft = ship.offsetLeft;
let posTop = ship.offsetTop;

window.addEventListener(
  "keydown",
  function (event) {
    event.key == "ArrowUp"
      ? (ship.style.margginTop = (posTop -= 5) + "px")
      : event.key == "ArrowDown"
      ? (ship.style.margginTop = (posTop += 5) + "px")
      : event.key == "ArrowLeft"
      ? (ship.style.margginLeft = (posTop -= 5) + "px")
      : event.key == "ArrowRight"
      ? (ship.style.margginLeft = (posTop += 5) + "px")
      : null;
  },
  true
);

// The modulus operator (%) is useful to put a limit on the amount of inputs you're reading.
// The nullish coalescing operator (??) helps perfom more precise logical comparisons. It's realted to the logical OR operator (||).
// ?? will only worry about the RHS if the LHS is null or undefined whereas || includes anything falsey

const pics = ["img/***.svg", "img/***.svg"];

function getLlama(llamaID) {
  llamaID = llamaID ?? Math.floor(Math.random() * pics.length);
  document.querySelector("#pic").src = pics[llamaID];
}

document
  .querySelector("#switchBtn")
  .addEventListener("click", () => getLlama(), false);

getLlama(0);

// The TRY part lets you attempt to perfom a series of statements. If any of these statements fail, the rest won't run.
// the CATCH part looks like a function with a parameter and will run when an error is found in the the try statement
// FINALLY will run things regardless of wether they work or not

try {
  console.log("this runs");
  doFail();
  console.log("this never runs");
} catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
} finally {
  console.log("this runs regardless");
}

// For example:

let bug = {
  antennae: false,
  width: 2,
  height: 0.5,
  wings: 2,
  legs: 6,
  color: "red",
};

try {
  if (typeof bug.antennae != "boolean") throw Error("Antennae not a boolean");
  if (bug.width > 5 || bug.height > 5) throw Error("Bug is too big");
  if (bug.legs % 2) throw Error("Legs need to be in pairs");
  if (!["red", "blue", "brown", "black"].includes(bug.color))
    throw Error("Invalid colour");
  console.log("Check Pass");
} catch (e) {
  console.log(e.message);
}

// Using software to convert on language into another is called TRANSPILING.
// TRANSPILING is a combination of compiling a language while translating to something else.
// The SPREAD SYNTAX (spread operator -> ...) allow you to use an iterable which is JS for a list type object, like an array.
// This will be expanded when something expects zero or more elements. For example:

let animals = ["cabybara", "platypus"];
animals = ["echidna", ...animals]; // add to FRONT of array

copy = [...animals];
copy.push("narwhal"); // add to END of array

function sortItems(items, order) {
  return order == "desc" ? items.sort() : items.sort().reverse();
}
let sorted = sortItems([...copy, ...animals], "desc");
console.log(copy);
console.log(animals);
console.log(sorted);
console.log([...copy, ...animals]);

// PROMISES are a way to ensure something happens only if something else has taken place.
// If the promise fulfills correctly, it's called a resolve, otherwise we call it a reject.

const myPromise = new Promise(function (resolve, reject) {
  if (true == true) {
    resolve("True Message");
  } else {
    reject("False Message");
  }
});

myPromise
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  })
  .finally(function () {
    console.log("Always");
  });

// ASYNC/AWAIT are a set of commands that help write promises using a simpler, convenient syntax.

const myPromise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Success");
  }, 2000);
});

async function myAsync() {
  console.log("Before Promise");
  const result = await myPromise2;
  console.log(result);
  console.log("After Promise");
}

console.log("Before myAsync");
myAsync();
console.log("After myAsynch");
