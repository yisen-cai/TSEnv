interface LabeledValue {
    label: string
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label)
}


let myObj = { size: 10, label: "Size 10 object" }


printLabel(myObj)


interface SquareConfig {
    color?: string
    width?: number
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: "white", area: 10 }
    if (config.color) {
        newSquare.color = config.color
    }

    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({ color: 'black' })



interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // error

let a: number[] = [1, 2, 3, 4]

let ro: ReadonlyArray<number> = a;

// ro[0] = 12 //error
// ro.push(5) //error
// ro.length = 100 //error
// a = ro  //error
a = ro as number[] // ok

// The easiest way to remember whether to use readonly or const is to ask whether
// you’re using it on a variable or a property.
// Variables use const whereas properties use readonly.



// Function types
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc

mySearch = function (source: string, subString: string) {
    let result = source.search(subString)
    return result > -1
}

mySearch = function (src, sub) {
    let result = src.search(sub)
    return result > -1
}


// Indexalbe types
interface StringArray {
    [index: number]: string
}

let myArray: StringArray

myArray = ['Bob', 'Fred']

// could index with a number, then return a string
// There are two types of supported index signatures: string and number
let myStr = myArray[0]


// support both could be possible,
// but need number index return type must be subtype of type returned from the string indexr
class Animal {
    name: string
}


class Dog extends Animal {
    breed: string
}


interface NotOkay {
    // not ok, because animal is not dog subtype
    // error, the type of 'name' is not a subtype of the indexer
    [x: string]: Dog
}


interface NumberDictionary {
    [index: string]: number
    length: number
    // n
    // name: string
}

// union type is ok
interface NumberOrStringDictionary {
    [index: string]: number | string
    length: number
    name: string
}


interface ClockInterface {
    currentTime: Date
    setTime(d: Date): void
}

class Clock implements ClockInterface {
    currentTime: Date = new Date()
    constructor(h: number, m: number) {
    }
    tick(): void {
        throw new Error("Method not implemented.")
    }
    setTime(d: Date): void {
        this.currentTime = d;
    }
}
// interface can only create public side, not private
// interface can only create an instance func, not static side func
interface ClockConstructor {
    new(hour: number, minute: number)
}


// This is because when a class implements an interface,
// only the instance side of the class is checked.
// Since the constructor sits in the static side, it is not included in this check.
// could'nt implement static type
// class Clock1 implements ClockConstructor {
//     constructor(h: number, m: number) { }
// }

interface ClockInterface {
    tick(): void
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}


class DigitalClock implements ClockInterface {
    currentTime: Date
    setTime(d: Date): void {
        throw new Error("Method not implemented.")
    }
    tick(): void {
        console.log("beep beep")
    }

    constructor(h: number, m: number) { }
}

class AnalogClock implements ClockInterface {
    currentTime: Date
    setTime(d: Date): void {
        throw new Error("Method not implemented.")
    }
    tick(): void {
        console.log("tick tick")
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)

const Clock1: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) { }
    currentTime: Date
    setTime(d: Date): void {
        throw new Error("Method not implemented.")
    }
    tick(): void {
        throw new Error("Method not implemented.")
    }


}


interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square = {} as Square

square.color = 'blue'
square.sideLength = 10

interface PenStroke {
    penWidth: number
}

interface Square1 extends Shape, PenStroke {
    sideLength: number
}

let square1 = {} as Square1
square1.color = 'blue'
square1.penWidth = 5.0
square1.sideLength = 10


interface Counter {
    // no name func type
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter
    counter.interval = 123
    counter.reset = function () { }
    return counter
}


// interface extends a class with private and protected members
// implement that interface need to be subclass of the class
class Control {
    private state: any
}

interface SelectableControl extends Control {
    select(): void
}


class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
// Since state is a private member it is only possible for descendants
// of Control to implement SelectableControl.
// class Image implements SelectableControl {

//     private state: any
//     select(): void {
//         throw new Error("Method not implemented.")
//     }

// }