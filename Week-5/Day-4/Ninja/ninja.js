// Exercise 1 : print Full Name
// Instructions
// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`

// function printFullName(userInfo) {
//     const { first, last } = userInfo
//     console.log(`Your full name is ${first} ${last}`)
// }
// printFullName({ first: 'Elie', last: 'Schoppik' })

// // Destructure this object directly from the parameters
// //  (ie. Look at the Advanced Object lesson - Part II :
// //      Object destructuring used as an assignment to a function)

// // The output of the printFullName function should be the exact 
// // same as the displayStudentInfo function. (Exercise XP)
// function printFullName({ first, last }) {
//     console.log(`Your full name is ${first} ${last}`)
// }
// printFullName({ first: 'Elie', last: 'Schoppik' })


// Exercise 2 : keys and values
// Instructions
// Create a function that takes an object and returns the keys and values
//  as separate arrays.

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
// console.log(keysAndValues({ a: "Apple", c: "Microsoft", b: "Google" }))
// function keysAndValues(object) {
//     let objectArr = []
//     let arrKeys = Object.keys(object).sort()
//     let arrValue = Object.values(object)
//     objectArr.push(arrKeys)
//     objectArr.push(arrValue)
//     return objectArr
// }

// Return the keys sorted alphabetically, and their corresponding values 
// in the same order.
// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]


// Exercise 3 : Counter class
// Instructions
// Analyze the code below, what will be the output?
// class Counter {
//     constructor() {
//         this.count = 0;
//     }

//     increment() {
//         this.count++;
//     }
// }

// const counterOne = new Counter();
// counterOne.increment(); //1
// counterOne.increment();//2

// const counterTwo = counterOne;
// counterTwo.increment(); //3

// console.log(counterOne.count); //3

// Exercise 1 : Bird class
// Instructions
// Analyze the code below, what will be the output?
class Bird {
    constructor() {
        console.log("I'm a bird. 🦢");
    }
}

class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸");
        super();
    }
}

const pet = new Flamingo();

//I'm pink. 🌸
//I'm a bird. 🦢