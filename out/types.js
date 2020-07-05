let isDone = false;
// array
let list = [1, 2, 3];
let list1 = [1, 2, 3];
list1.forEach(x => {
    console.log(x);
});
// tuple
let x1;
x1 = ["hello", 10];
// enum
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["BLUE"] = 10] = "BLUE";
})(Color || (Color = {}));
// get color value or index
let r = Color.RED;
// 2
let g = Color.GREEN;
let b = Color.BLUE;
// get name
let colorName = Color[2];
console.log(colorName);
// Any type
// not sure value type or value type could change when running.
let notSure = 4;
notSure = true;
// Void
function warnUser() {
    console.log("This is my warning message");
}
// assign null
let unusable = undefined;
unusable = null; // OK if `--strictNullChecks` is not given
// could put mix type to an array
let anyList = [1, true, 'free'];
// Null and Undifined
// Not much else we can assign to these variables!
let u = undefined;
let n = null;
// Never represent the type that never occur.
// In function never return.
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
let someValue = "this is a string";
let strLength = someValue.length;
// And the other is the as- syntax:
let someValue1 = "this is a string";
let strLength1 = someValue.length;
//# sourceMappingURL=types.js.map