
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
    let startTime, endTime, running, duration = 0

    this.start = function() {
        startPoint = Date.now()
    }

    // this.stop() = function() {}
    
    // this.restart = function() {}

    
}

const sw =  new StopWatch()

console.log(sw.duration)
