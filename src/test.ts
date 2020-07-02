class Bike {
    color

    constructor(color) {
        this.color = color
    }

    ring() {
        console.log('ring ring')
    }
}

function logWithTimestamp(data) {
    console.log(`${new Date()}: ${data}`)
}

const log = logWithTimestamp;

['purple', 'red'].forEach(color => (new Bike(color)).ring())

log('bikes created')