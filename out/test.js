var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    Bike.prototype.ring = function () {
        console.log('ring ring');
    };
    return Bike;
}());
function logWithTimestamp(data) {
    console.log(new Date() + ": " + data);
}
var log = logWithTimestamp;
['purple', 'red'].forEach(function (color) { return (new Bike(color)).ring(); });
log('bikes created');
//# sourceMappingURL=test.js.map