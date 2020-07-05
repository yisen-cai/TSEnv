
let isDone: boolean = false


// array
let list: number[] = [1, 2, 3]

let list1: Array<number> = [1, 2, 3]

list1.forEach(x => {
    console.log(x)
})


// tuple
let x1: [string, number]

x1 = ["hello", 10]

// enum
enum Color {
    RED = 1,
    GREEN,
    BLUE = 10
}

// get color value or index
let r: Color = Color.RED

// 2
let g = Color.GREEN

let b = Color.BLUE


// get name
let colorName: string = Color[2]


console.log(colorName)



// Any type
// not sure value type or value type could change when running.
let notSure: any = 4
notSure = true

// Void
function warnUser(): void {
    console.log("This is my warning message");
}
// assign null
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given


// could put mix type to an array
let anyList: any[] = [1, true, 'free']


// Null and Undifined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Never represent the type that never occur.

// In function never return.
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}



// Object non-primitive type (number, string, boolean, bigint, symbol, null, undifined)
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// And the other is the as- syntax:
let someValue1: any = "this is a string";

let strLength1: number = (someValue as string).length;