console.log("tamagotchi")

// make class for tamagotchi

class Tamagotchi {
  constructor(name, age, hunger, boredom, sleepiness) {
    this.name = name
    this.age = age
    this.hunger = hunger
    this.bordom = boredom
    this.energy = energy
  }
}

class Pain extends Tamagotchi {
  constructor() {
  super(name, age, hunger, boredom, sleepiness)
  this.name = name
  this.age = 0
  this.hunger = 10
  this.boredom = 10
  this.energy = 10
  }
}
const game = {
  timer: 20,
  age: 0,
  hunger: 10,
  boredom: 10,
  energy: 10,
  gettingHungry() {},
  gettingSleepy() {},
  gettingBored() {},
}
const backgroundElement = document.querySelector('#background');
const sleepButton = document.querySelector('#sleep')

//console.log(backgroundElement.classList)

sleepButton.addEventListener('click', (event) => {
  // console.log("go to sleep");
  // console.log(backgroundElement.classList);
  backgroundElement.classList.add('nighttimeBackground')
  //console.log(backgroundElement.classList);
  backgroundElement.classList.remove('daytimeBackground')
  //console.log(backgroundElement.classList);
  setTimeout(() => {
    backgroundElement.classList.add('daytimeBackground')
    backgroundElement.classList.remove('nighttimeBackground')
  }, 2500)
  }
);

const backgroundElement2 = document.querySelector('#background');
const eatButton = document.querySelector('#feed')

//console.log(backgroundElement2.classList)

eatButton.addEventListener('click', (event) => {
  //console.log("go to eat");
  //console.log(backgroundElement2.classList);
  backgroundElement.classList.add('timeToEatBackground')
  //console.log(backgroundElement2.classList);
  backgroundElement.classList.remove('daytimeBackground')
  //console.log(backgroundElement2.classList);
  setTimeout(() => {
    backgroundElement2.classList.add('daytimeBackground')
    backgroundElement2.classList.remove('timeToEatBackground')
  }, 2500)
  }
);

const backgroundElement3 = document.querySelector('#background');
const playButton = document.querySelector('#play')

//console.log(backgroundElement3.classList)

playButton.addEventListener('click', (event) => {
  //console.log("go to play");
  //console.log(backgroundElement3.classList);
  backgroundElement.classList.add('playtimeBackground')
  //console.log(backgroundElement3.classList);
  backgroundElement.classList.remove('daytimeBackground')
  //console.log(backgroundElement3.classList);
  setTimeout(() => {
    backgroundElement3.classList.add('daytimeBackground')
    backgroundElement3.classList.remove('playtimeBackground')
  }, 2500)
  }
);
