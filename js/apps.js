console.log("tamagotchi")

// make class for tamagotchi

class Tamagotchi {
  constructor(name, age, hunger, boredom, sleepiness) {
    this.name = name
    this.age = age
    this.hunger = hunger
    this.boredom = boredom
    this.sleepiness = sleepiness
  }
}

class Pain extends Tamagotchi {
  constructor(name) {
    super(name)
    this.name = name
    this.age = 0
    this.hunger = 10
    this.boredom = 10
    this.sleepiness = 10
  }
}

 const game = {
  timer: 10,
  age: 0,
  hunger: 10,
  boredom: 10,
  sleepiness: 10,
  gettingHungry() {
    const hungerTimer = document.querySelector('#foodTimer')

    this.hunger --
    hungerTimer.innerText = `Hunger: ${this.hunger}`

    const intervalID = setInterval(() => {
      this.hunger --
      hungerTimer.innerText = `Hunger: ${this.hunger}`

      if (this.hunger <= 0) {
        clearInterval(intervalID)
        const backgroundElement4 = document.querySelector('#background')
        const gameOverBackground = document.querySelector('#gameOverScreen')
        const backgroundElement5 = document.querySelector('#chibiPain')
        const removeButtons1 = document.querySelector('#Feed')
        const removeButtons2 = document.querySelector('#Sleep')
        const removeButtons3 = document.querySelector('#Play')
        const removeTimer1 = document.querySelector('#foodTimer')
        const removeTimer2 = document.querySelector('#sleepTimer')
        const removeTimer3 = document.querySelector('#boredomTimer')
          backgroundElement4.classList.add('gameOverScreen')
          backgroundElement4.classList.remove('daytimeBackground')
          backgroundElement5.classList.remove('chibiPain')
          removeButtons1.classList.remove('button')
          removeButtons2.classList.remove('button')
          removeButtons3.classList.remove('button')
          removeTimer1.classList.remove('timer')
          removeTimer2.classList.remove('timer')
          removeTimer3.classList.remove('timer')
      }
    }, 3000)
  },

  gettingSleepy() {
    const sleepinessTimer = document.querySelector('#sleepTimer')

    this.sleepiness --
    sleepinessTimer.innerText = `Sleepiness: ${this.sleepiness}`

    const intervalID = setInterval(() => {
      this.sleepiness --
      sleepinessTimer.innerText = `Sleepiness: ${this.sleepiness}`

      if (this.sleepiness <= 0) {
        clearInterval(intervalID)
        const backgroundElement4 = document.querySelector('#background')
        const gameOverBackground = document.querySelector('#gameOverScreen')
        const backgroundElement5 = document.querySelector('#chibiPain')
        const removeButtons1 = document.querySelector('#Feed')
        const removeButtons2 = document.querySelector('#Sleep')
        const removeButtons3 = document.querySelector('#Play')
        const removeTimer1 = document.querySelector('#foodTimer')
        const removeTimer2 = document.querySelector('#sleepTimer')
        const removeTimer3 = document.querySelector('#boredomTimer')
          backgroundElement4.classList.add('gameOverScreen')
          backgroundElement4.classList.remove('daytimeBackground')
          backgroundElement5.classList.remove('chibiPain')
          removeButtons1.classList.remove('button')
          removeButtons2.classList.remove('button')
          removeButtons3.classList.remove('button')
          removeTimer1.classList.remove('timer')
          removeTimer2.classList.remove('timer')
          removeTimer3.classList.remove('timer')
      }
    }, 3000)
  },
  gettingBored() {
    const boredTimer = document.querySelector('#boredomTimer')

    this.boredom --
    boredTimer.innerText = `Energy: ${this.boredom}`

    const intervalID = setInterval(() => {
      this.boredom --
      boredTimer.innerText = `Energy: ${this.boredom}`

      if (this.boredom <= 0) {
        clearInterval(intervalID)
        const backgroundElement4 = document.querySelector('#background')
        const gameOverBackground = document.querySelector('#gameOverScreen')
        const backgroundElement5 = document.querySelector('#chibiPain')
        const removeButtons1 = document.querySelector('#Feed')
        const removeButtons2 = document.querySelector('#Sleep')
        const removeButtons3 = document.querySelector('#Play')
        const removeTimer1 = document.querySelector('#foodTimer')
        const removeTimer2 = document.querySelector('#sleepTimer')
        const removeTimer3 = document.querySelector('#boredomTimer')
          backgroundElement4.classList.add('gameOverScreen')
          backgroundElement4.classList.remove('daytimeBackground')
          backgroundElement5.classList.remove('chibiPain')
          removeButtons1.classList.remove('button')
          removeButtons2.classList.remove('button')
          removeButtons3.classList.remove('button')
          removeTimer1.classList.remove('timer')
          removeTimer2.classList.remove('timer')
          removeTimer3.classList.remove('timer')

      }
    }, 3000)
  },
  feed(){
    const hungerButton = document.querySelector('#Feed')
    hungerButton.addEventListener('click', (event) => {
      this.hunger ++

    })
  },
  sleep(){
    const sleepButton = document.querySelector('#Sleep')
    sleepButton.addEventListener('click', (event) => {
      this.sleepiness ++

    })
  },
  play(){
    const playButton = document.querySelector('#Play')
    playButton.addEventListener('click', (event) => {
      this.boredom ++

    })
  },
}

const backgroundElement = document.querySelector('#background');
const sleepButton = document.querySelector('#Sleep')
sleepButton.addEventListener('click', (event) => {
  backgroundElement.classList.add('nighttimeBackground')
  backgroundElement.classList.remove('daytimeBackground')
  setTimeout(() => {
    backgroundElement.classList.add('daytimeBackground')
    backgroundElement.classList.remove('nighttimeBackground')
  }, 1000)
  }
);

const backgroundElement2 = document.querySelector('#background');
const eatButton = document.querySelector('#Feed')


eatButton.addEventListener('click', (event) => {
  backgroundElement.classList.add('timeToEatBackground')
  backgroundElement.classList.remove('daytimeBackground')
  setTimeout(() => {
    backgroundElement2.classList.add('daytimeBackground')
    backgroundElement2.classList.remove('timeToEatBackground')
  }, 1000)
  }
);

const backgroundElement3 = document.querySelector('#background');
const playButton = document.querySelector('#Play')
playButton.addEventListener('click', (event) => {
  backgroundElement.classList.add('playtimeBackground')
  backgroundElement.classList.remove('daytimeBackground')
  setTimeout(() => {
    backgroundElement3.classList.add('daytimeBackground')
    backgroundElement3.classList.remove('playtimeBackground')
  }, 1000)
  }
);

const newTam = new Pain("bob")
game.gettingHungry()
game.gettingSleepy()
game.gettingBored()
game.feed()
game.sleep()
game.play()
