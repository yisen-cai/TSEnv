
// will print 10 times 10
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}


// for (var i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (function (i) {
//         setTimeout(function () { console.log(i); }, 100 * i);
//     })(i);
// }

// let varible could not be redeclare.
let x = 10;
// let x = 20; // error: can't re-declare 'x' in the same scope


// let variable value could be declare within a distinctly block
function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns '0'
f(true, 0);  // returns '100'



// destructuring解构
let input = [1, 2]

// first:1, second:2
let [first, second] = input;

[first, second] = [second, first];

function f1([first, second]: [number, number]) {
    console.log(first)
    console.log(second)
}
f1([1, 2])


let [first1, ...rest] = [1, 2, 3, 4]
console.log(first) // 1
console.log(rest) // 2, 3, 4



let [first2] = [1, 2, 3, 4]
console.log(first2) // 1


let [, second2, , fourth2] = [1, 2, 3, 4] // second2: 2, fourth: 4


let tuple: [number, string, boolean] = [7, 'hello', true]

// get the types of corresponding tuple elements
let [j, k, e] = tuple // a: number, b:string, c:boolean





// function declaration, b is optional
// TODO:
type C = { a: string, b?: number }
function f2({ a, b }: C): void {
    // ...
}


function f3({ a = "", b = 0 } = {}): void {
    // ...
}

function f4({ a, b = 0 } = { a: "" }): void {
    // ...
}
// f({ a: "yes" }); // ok, default b = 0
// f(); // ok, default to { a: "" }, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument


// Spread

let many1 = [1, 2];
let many2 = [3, 4];
let bothPlus = [0, ...many1, ...many2, 5];

// also support object
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// later in the spread object overwrite properties that come earlier.
let search = { ...defaults, food: "rich" }; //{ food: "rich", price: "$$", ambiance: "noisy" }