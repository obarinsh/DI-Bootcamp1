// Exercise 1 : Checking the BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details.Here are the details:

let person1 = {
    fullName: 'Olga Barinshteyn',
    mass: 64,
    height: 173,
    calcBMI: function () {
        return this.mass / ((this.height / 100) ** 2);
    }
}

let person2 = {
    fullName: 'Lala Land',
    mass: 69,
    height: 159,
    calcBMI: function () {
        return this.mass / ((this.height / 100) ** 2);
    }
}

console.log(person1.calcBMI())
console.log(person2.calcBMI())
// Each object should also have a key which value is a function (ie.A method), that calculates the Body Mass Index(BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.


//     Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others.You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
//     Bonus Try and split parts 1, 2 and 3, 4 of this exercise to two separate functions.
// Hint One function must call the other.