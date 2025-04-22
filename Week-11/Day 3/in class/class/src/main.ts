// static 

// class Student {
//   static count: number = 0
//   static getCount(): number {
//     return Student.count
//   }
//   name: string
//   id: number

//   constructor(name: string) {
//     this.name = name
//     this.id = ++Student.count
//   }
// }

// const stud1 = new Student('John')
// const stud2 = new Student('Anna')
// const stud3 = new Student('Dan')


// console.log(stud1);
// console.log(stud2);
// console.log(stud3);

/**
 * Exercise: Create a Car Class implements a Car interface
 * 
Create a Car class with the following properties:

make (string) - The manufacturer of the car.
model (string) - The model of the car.
year (number) - The year the car was made.
isElectric (boolean) - Whether the car is electric or not.

Add a constructor to initialize these properties.

Add a method getCarDetails() that returns a string in the format:

"{year} {make} {model} - Electric: {isElectric}"
Add a method age(currentYear: number): number 
to calculate how old the car is based on the currentYear passed as a parameter.

Bonus Challenge
Add a static method compareCars(car1: Car, car2: Car): string 
to compare the ages of two cars and return which one is older.
*/

// index signature /keys
// interface Employee {

//   name: string
//   age: number
//   role: string
// }

// const employee1: Employee = {
//   name: 'John',
//   age: 33,
//   role: 'developer'
// }

// console.log(employee1.name);
// console.log(employee1['name']);

// // employee1.email='jjj@mail.com'

// const prop1: string = 'name'
// employee1[prop1 as keyof Employee]
// employee1[prop1]

// for (let key in employee1) {
//   console.log(key, employee1[key as keyof Employee]);
//   console.log(key, employee1[key as keyof typeof employee1]);
//   console.log(key, employee1[key]);

// }

// Record type
// type UserT = {
//   name: string
//   age: number
// }


// type keys = 'name' | 'age'
// type UserR = Record<keys, string | number>


// const user1: UserT = {
//   name: 'a',
//   age: 1
// }

// const user2: UserR = {
//   name: '1',
//   age: 'adv'
// }

// GENERICS

const strEcho = (value: string): string => value
const numEcho = (value: number): number => value
const boleanEcho = (value: boolean): boolean => value

const echo = <T>(value: T): T => value