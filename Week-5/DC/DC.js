// Using this object:

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object.Use the forEach method.
const displayGroceries = () => groceries.fruits.forEach(fruit => {
    console.log(fruit);
});
displayGroceries()

const cloneGroceries = () => {
    const user = client
    client = "Betty";
    const shopping = {
        ...groceries, // Copies first-level properties
        other: { ...groceries.other } // Copies `other` separately to avoid mutation
    };
    shopping.totalPrice = "35$"
    shopping.other.paid = false
    console.log(user)
    console.log(client)
    console.log(groceries)
    console.log(shopping)
}
cloneGroceries()
// Create another arrow fuction named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
//     In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$.Will we also see this modification in the shopping object ? Why ?
//     Change the value of the paid key to false.Will we also see this modification in the shopping object ? Why ?

//         Invoke the cloneGroceries function.

