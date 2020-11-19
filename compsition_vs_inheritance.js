// inheritance

class Monster {
    constructor(name) {
        this.name = name
    }

    attack() {
        console.log(`${this.name} attacked`)
    }

    walk() {
        console.log(`${this.name} walked`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} flew`)
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} swam`)
    }
}

class FlyingSwimmingMonster {
    // we have to doublicate the logic or there is no other way around
}

// composition

function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = { name: name }

    return {
        ...monster,
        ...swimmer(monster)
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = { name: name }

    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster)
    }
}


const obj = flyingSwimmingMonsterCreator('Monster' )
obj.swim()
obj.fly()