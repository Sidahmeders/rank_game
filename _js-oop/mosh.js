
function Circle(radius) {
    this.radius = radius

    let defaultLocation = {x: 0, y: 0}

    let computeOptimumLocation = function(factor) {
        // do some fancy stuff
    }

    this.draw = function() {
        computeOptimumLocation(3)
        console.log('drwaing..')
    }

    Object.defineProperty(this, 'defLoc', {
        get: () => defaultLocation,
        set: value => {
            if (value == 5) throw new Error('what the fuck')
            computeOptimumLocation(value)
        }
    })
}

const circle = new Circle(10)

// console.log(circle.defLoc = 55)
// console.log(circle.defLoc)

function StopWatch() {
    this.now = Date.now()
    this.duration = 0

    this.start = function() {
        let startTime = this.now
    }

    // this.restart = function() {}

    // this.stop() = function() {}
}

const sw =  new StopWatch()

console.log(sw.now)
