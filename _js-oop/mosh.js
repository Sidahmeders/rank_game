
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
        get: function() {
            return defaultLocation
        },
        set: value => computeOptimumLocation(value)
    })
}

const circle = new Circle(10)

circle.defaultLocation