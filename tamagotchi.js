var prompt = require('prompt-sync')()

class Pet {
  constructor(name, happiness = 5, hunger = 5) {
    this.name = name
    this.happiness = happiness
    this.hunger = hunger
    this.isDead = false
    this.userInput
    this.foods = {
      biscuits: 'loves',
      meat: 'is crazy for',
      cucumbers: "can't stand",
    }
  }

  feed() {
    console.clear()
    if (this.isDead) {
      console.log('Your pet is dead')
    }
    console.log(`You are feeding ${this.name}`)
    this.randomFoodReaction()
    console.log(
      `${this.name}: happiness: ${this.happiness}, hunger: ${this.hunger}.\n`
    )
  }

  play() {
    console.clear()
    console.log(`You are playing with ${this.name}`)
    this.happiness++
    this.hunger++
    console.log(
      `${this.name}: happiness: ${this.happiness}, hunger: ${this.hunger}.\n`
    )

    if (this.hunger >= 10) {
      this.isDead = true
    }
  }

  pullSledge() {
    console.clear()
    console.log(`${this.name} is pulling very hard!`)
    this.happiness--
    this.hunger = this.hunger + 2
    console.log(
      `${this.name}: happiness: ${this.happiness}, hunger: ${this.hunger}.\n`
    )

    if (this.hunger >= 10) {
      this.isDead = true
    }
  }

  health() {
    console.clear()
    console.log('\n-------------')
    console.log(
      `${this.name}'s details:\n Happiness: ${this.happiness}\n Hunger: ${this.hunger}`
    )
    console.log('-------------\n')
  }

  petDied() {
    console.clear()
    console.log(console.log(`Sorry but you let ${this.name} die...`))
    process.exit()
  }

  quit() {
    console.clear()
    console.log(`Come back soon or ${this.name} will get very sad!`)
    process.exit()
  }

  displayOptions() {
    console.log('What would you like to do?')
    console.log('[f] -> Feed')
    console.log('[p] -> Play')
    console.log('[s] -> Pull the Sledge')
    console.log('[h] -> Health details')
    console.log('[q] -> Quit')
  }

  wrongInput() {
    console.clear()
    console.log(`\nWhat did you say?\n`)
  }

  // utility function called within this.feed()
  randomFoodReaction() {
    let foodChoiceNum = Math.floor(
      Math.random() * Object.keys(this.foods).length
    )
    console.log(this.foods.length)
    console.log('foodChoiceNum', foodChoiceNum)
    let foodChoiceStr = Object.keys(this.foods)[foodChoiceNum]
    console.log('foodChoiceStr', foodChoiceStr)

    console.clear()
    console.log(`${this.name} ${this.foods[foodChoiceStr]} ${foodChoiceStr}!`)
    switch (foodChoiceNum) {
      case 0:
      case 1:
        this.hunger--
        this.happiness++
        break
      case 2:
        this.happiness--
    }
  }

  // game loop
  loop() {
    console.clear()
    console.log(`${this.name} is happy to see you!\n`)

    do {
      if (this.isDead) this.petDied()

      this.userInput = this.displayOptions()

      this.userInput = prompt()

      switch (this.userInput) {
        case 'f':
        case 'F':
          this.feed()
          break
        case 'p':
        case 'P':
          this.play()
          break
        case 's':
        case 'S':
          this.pullSledge()
          break
        case 'h':
        case 'H':
          this.health()
          break
        case 'q':
        case 'Q':
          this.quit()
          break
        default:
          this.wrongInput()
          break
      }
    } while (this.userInput !== 'q' || this.userInput != 'Q' || this.isDead)
  }
}

// Start - ask for the pet's name until a non empty string is entered
let petName
do {
  console.clear()
  petName = prompt("What is your pet's name?  ")
} while (petName === '')

let newGame = new Pet(petName)
newGame.loop()
