class Tamagotchi {
  constructor(name, happiness = 5, hunger = 5) {
    this.name = name
    this.happiness = happiness
    this.hunger = hunger
  }

  // TODO add types of food
  feed() {
    console.log('feeding time')
    this.happiness++
    this.hunger--
    console.log(
      `${this.name}: happiness: ${this.happiness}, hunger: ${this.hunger}.`
    )
  }

  play() {
    console.log('feeding time')
    this.happiness++
    this.hunger++
    console.log(
      `${this.name}: happiness: ${this.happiness}, hunger: ${this.hunger}.`
    )
  }

  status() {
    console.log(
      `${this.name}: happiness: ${this.happiness}, hunger: ${this.hunger}.`
    )
  }
}

function createTamagotchi(name) {
  return new Tamagotchi(name)
}

let zelda = createTamagotchi('Zelda')
zelda.feed()
zelda.play()
