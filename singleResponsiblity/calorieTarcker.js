const { logCaloriesSurplus } = require('./logger')

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(caloriesCount) {
        this.currentCalories += caloriesCount
        if (this.currentCalories > this.maxCalories) {
            logCaloriesSurplus('Max Calories Exeeded')
        }
    }
}

const caloriesTarcker = new CalorieTracker(1600)
caloriesTarcker.trackCalories(450)
caloriesTarcker.trackCalories(500)
caloriesTarcker.trackCalories(950)
