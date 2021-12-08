console.log("tamagotchi")

// make class for tamagotchi
const backgroundElement4 = document.querySelector('#background')
const gameOverBackground = document.querySelector('#gameOverScreen')
const backgroundElement5 = document.querySelector('#chibiPain')
const removeButtons1 = document.querySelector('#Feed')
const removeButtons2 = document.querySelector('#Sleep')
const removeButtons3 = document.querySelector('#Play')
const removeTimer1 = document.querySelector('#foodTimer')
const removeTimer2 = document.querySelector('#sleepTimer')
const removeTimer3 = document.querySelector('#boredomTimer')
const removeAge = document.querySelector('#ageTimer')
const removePains = document.querySelector('#added-images')

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

class Pain2 extends Tamagotchi {
  constructor(name) {
    super(name)
    this.name = name
    this.age = 5
    this.hunger = 10
    this.boredom = 10
    this.sleepiness = 10
  }
}
 const game = {
  timer: 10,
  age: 1,
  hunger: 10,
  boredom: 10,
  sleepiness: 10,
  growing(){
    const agingUp = document.querySelector('#Pain')
    const evolutionTimer = document.querySelector("#ageTimer")
    const intervalID = setInterval(() => {
      this.age ++
      evolutionTimer.innerText = `Pains: ${this.age}`
      if (this.age === 2) {
        const newImg = document.createElement('img')
        newImg.id = "added-images";
        newImg.className = "Pain2"
        newImg.src = "https://i.imgur.com/69b3WIf.png"
        newImg.alt = "Pain2";
        document.querySelector('.container')
        .append(newImg);
      }
      if(this.age === 3) {
        const newImg2 = document.createElement('img')
        newImg2.id = "added-images"
        newImg2.className = "Pain3"
        newImg2.src = "https://i.imgur.com/8bDosQo.png"
        newImg2.alt = "Pain 3"
        document.querySelector('.container')
        .append(newImg2)
      }
      if(this.age === 4) {
        const newImg3 = document.createElement('img')
        newImg3.id = "added-images"
        newImg3.className = "Pain4"
        newImg3.src = "https://i.imgur.com/g7tLQ7F.png"
        newImg3.alt = "Pain 4"
        document.querySelector('.container')
        .append(newImg3)
      }
      if(this.age === 5) {
        const newImg4 = document.createElement('img')
        newImg4.id = "added-images"
        newImg4.className = "Pain5"
        newImg4.src = "https://i.imgur.com/34rzSDq.png"
        newImg4.alt = "Pain 5"
        document.querySelector('.container')
        .append(newImg4)
      }
      if(this.age === 6) {
        const newImg5 = document.createElement('img')
        newImg5.id = "added-images"
        newImg5.className = "Pain6"
        newImg5.src = "https://i.imgur.com/HxsVdOP.png"
        newImg5.alt = "Pain 6"
        document.querySelector('.container')
        .append(newImg5)
      }
      // if(this.age === 7) {
      //   const newImg6 = document.createElement('img')
      //   newImg6.id = "added-images"
      //   newImg6.className = "Naruto"
      //   newImg6.src = "https://i.imgur.com/CPFkgEb.png"
      //   newImg6.alt = "Naruto"
      //   document.querySelector('.container')
      //   .append(newImg6)
      // }
    }, 1000)
  },

  gettingHungry() {
    const hungerTimer = document.querySelector('#foodTimer')

    this.hunger --
    hungerTimer.innerText = `Hunger: ${this.hunger}`

    const intervalID = setInterval(() => {
      this.hunger --
      hungerTimer.innerText = `Hunger: ${this.hunger}`

      if (this.hunger <= 0) {
        clearInterval(intervalID)
          backgroundElement4.classList.remove('daytimeBackground')
        if (backgroundElement5) {
          backgroundElement5.remove('chibiPain');
        }
        if (removeButtons1) {
          removeButtons1.remove('button')
        }
        if (removeButtons2) {
          removeButtons2.remove('button')
        }
        if (removeButtons3) {
          removeButtons3.remove('button')
        }
        if (removeTimer1) {
          removeTimer1.remove('timer')
        }
        if (removeTimer2) {
          removeTimer2.remove('timer')
        }
        if (removeTimer3) {
          removeTimer3.remove('timer')
        }
        if (removeAge) {
          removeAge.remove('evolution')
        }
        if (removePains) {
          removePains.remove('Pain2')
        }
          backgroundElement4.classList.add('gameOverScreen')
      }
    }, 1000)
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
          backgroundElement4.classList.remove('daytimeBackground')
        if (backgroundElement5) {
          backgroundElement5.remove('chibiPain');
        }
        if (removeButtons1) {
          removeButtons1.remove('button')
        }
        if (removeButtons2) {
          removeButtons2.remove('button')
        }
        if (removeButtons3) {
          removeButtons3.remove('button')
        }
        if (removeTimer1) {
          removeTimer1.remove('timer')
        }
        if (removeTimer2) {
          removeTimer2.remove('timer')
        }
        if (removeTimer3) {
          removeTimer3.remove('timer')
        }
        if (removeAge) {
          removeAge.remove('evolution')
        }
        backgroundElement4.classList.add('gameOverScreen')
      }
    }, 1000)
  },

  gettingBored() {
    const boredTimer = document.querySelector('#boredomTimer')

    this.boredom --
    boredTimer.innerText = `Boredom: ${this.boredom}`

    const intervalID = setInterval(() => {
      this.boredom --
      boredTimer.innerText = `Boredom: ${this.boredom}`

      if (this.boredom <= 0) {
        clearInterval(intervalID)
          backgroundElement4.classList.remove('daytimeBackground')
        if (backgroundElement5) {
          backgroundElement5.remove('chibiPain');
        }
        if (removeButtons1) {
          removeButtons1.remove('button')
        }
        if (removeButtons2) {
          removeButtons2.remove('button')
        }
        if (removeButtons3) {
          removeButtons3.remove('button')
        }
        if (removeTimer1) {
          removeTimer1.remove('timer')
        }
        if (removeTimer2) {
          removeTimer2.remove('timer')
        }
        if (removeTimer3) {
          removeTimer3.remove('timer')
        }
        if (removeAge) {
          removeAge.remove('evolution')
        }
        backgroundElement4.classList.add('gameOverScreen')
      }
    }, 1000)
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
game.growing()
game.gettingHungry()
game.gettingSleepy()
game.gettingBored()
game.feed()
game.sleep()
game.play()
