
let obj = {val: 10}

function increase({ val }) {
    val++
}

increase(obj)

console.log(obj.val)