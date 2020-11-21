
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
    
    this.start = () => {
        if (running) console.log('its already running')
        else {
            running = true
            startTime = Date.now()
        }
    }

    this.stop = () => {
        if (!running) console.log('its not running!')
        else {
            running = false
            endTime = Date.now()

            const seconds = (endTime - startTime) / 1000
            duration += seconds
        }
    }

    this.restart = () => {
        startTime = endTime = null
        running = false
        duration = 0
    }
    
    Object.defineProperty(this, 'duration', {
        get: () => duration
    })

}

const sw =  new StopWatch()

sw.start()

console.log(sw.duration())