function print(firstname) {
  console.log(`Hello ${firstname}`);
}

print("Mohsin");

function createEmail(firstname, price) {
  let shipping = 5.99;
  console.log(`Hi ${firstname}! 
Thanks for odering with us!
Total: $${price}
Shipping: $${shipping}
Grand Total: $${price + shipping}
`);
}

createEmail("Mohsin", 99);

console.log("––––––––––––––––––––––––––––");

function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    },
  };
}

skier("Mohsin", "Pirate").powderYell();
console.log(skier("Mohsin", "Pirate"));

console.log("––––––––––––––––––––––––––––");

class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }
  describeYouself() {
    console.log(`I am a ${this.description} and I have ${this.wheels}.`);
  }
}

class SemiTruck extends Vehicle {
  constructor() {
    super("Semi Truck", 6);
  }
}
let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYouself();

console.log("––––––––––––––––––––––––––––");

let cat = {
  meow(times) {
    console.log("Meow ".repeat(times));
  },
  purr(times) {
    console.log("Prrr ".repeat(times));
  },
  snoze(times) {
    console.log("ZzZz ".repeat(times));
  },
};

cat.meow(3);
cat.purr(4);
cat.snoze(5);

console.log("––––––––––––––––––––––––––––");

const spacePeople = () => {
  return new Promise((resolves, rejects) => {
    const api = "http://api.open-notify.org/astros.json";
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      if (request.status === 200) {
        resolves(JSON.parse(request.response));
      } else {
        rejects(Error(request.statusText));
      }
    };
    request.onerror = (err) => rejects(err);
    request.send();
  });
};

spacePeople().then(
  (spacePeople) => console.log(spacePeople),
  (err) => console.log(new Error("Can't load people"))
);

console.log("––––––––––––––––––––––––––––");

let getSpacePeople = () =>
  fetch("http://api.open-notify.org/astros.json").then((res) => res.json());

getSpacePeople().then(console.log);

let spaceNames = () =>
  getSpacePeople()
    .then((json) => json.people)
    .then((people) => people.map((p) => p.name))
    .then((names) => names.join(", "));

spaceNames().then(console.log);

console.log("––––––––––––––––––––––––––––");

const githubRequest = async (login) => {
  let response = await fetch(`https://api.github.com/users/${login}`);
  let json = await response.json();
  let summary = `${json.name}, ${json.company}`;
  console.log(summary);
};

githubRequest("MuneebZ");
