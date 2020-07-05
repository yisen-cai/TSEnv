class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }

    greet() {
        return "Hello, " + this.greeting
    }
}

let greeterInstance = new Greeter("world")

class Animals {
    #name: string
    constructor(theName: string) {
        this.#name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.#name} has moved ${distanceInMeters}m.`)
    }
}

class Snake extends Animals {
    constructor(name: string) {
        super(name)
    }

    move(distanceInMeters = 5) {
        console.log('Slithering...')
        super.move(distanceInMeters)
    }
}


class Horse extends Animals {
    constructor(name: string) {
        super(name)
    }

    move(distanceInMeters = 45) {
        console.log('Galloping...')
        super.move(distanceInMeters)
    }
}

let sam = new Snake("Sammy the python")
let tom: Animals = new Horse("Tommy the palomino")

sam.move()
tom.move(34)



class Dogs extends Animals {
    bark() {
        console.log("Woof! Woof!")
    }
}

const dog = new Dogs("Peter")

dog.bark()

dog.move(10)
dog.bark()



class Octpus {
    readonly numberOfLets: number = 8
    // declare a readonly field, support public, protected, readonly keyword
    constructor(readonly name: string) { }
}

const fullNameMaxLength = 10
class Employee {
    private _fullName: string

    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength)
        }
        this._fullName = newName
    }
}

let employee = new Employee()

employee.fullName = "Bob Smith"

if (employee.fullName) {
    console.log(employee.fullName)
}

abstract class Creature {

    abstract makeSound(): void

    move(): void {
        console.log("roaming the earth...")
    }
}


