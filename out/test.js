class Greeters {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeters.standardGreeting;
        }
    }
}
Greeters.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeters();
console.log(greeter1.greet()); // "Hello, there"
let greeterMaker = Greeters;
greeterMaker.standardGreeting = "Hey there!";
let greeter2 = new greeterMaker();
console.log(greeter2.greet()); // "Hey there!"
//# sourceMappingURL=test.js.map