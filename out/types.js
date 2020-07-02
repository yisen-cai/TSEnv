var isDone = false;
// array
var list = [1, 2, 3];
var list1 = [1, 2, 3];
list1.forEach(function (x) {
    console.log(x);
});
// tuple
var x;
x = ["hello", 10];
console.log(x);
// enum
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["BLUE"] = 3] = "BLUE";
})(Color || (Color = {}));
//
var c = Color.RED;
// get name
var colorName = Color[2];
console.log(colorName);
//# sourceMappingURL=types.js.map