// EX1: Intersection Types

// type Person = {
//   name: string,
//   age: number
// }

// type Address = {
//   street: string,
//   city: string
// }



// type PersonWithAddress = Person & Address

// const person1: PersonWithAddress = {
//   name: 'Olga',
//   age: 32,
//   street: 'LALALA',
//   city: 'LALALAND'
// }

// console.log(person1)

// EX2:Type Guards 

// const describeValue = (value: number | string): string => {
//   if (typeof (value) === 'number') return "This is a number"
//   else if (typeof value === 'string') return "This is a string"
// }

// console.log(describeValue(4))
// console.log(describeValue('feeee'))


// EX3:Type casting 

// let someValue: any

// someValue = <string>'Hello'
// someValue = 'Hello' as string
// console.log(someValue)

// EX4:Type Assertions with Union Types

// const getFirstElement = (arr: (number | string)[]) => {
//   const firstEl = arr[0] as string
//   return firstEl
// }

// console.log(getFirstElement([2, '4343', 'fdfdf']));
// console.log(getFirstElement(['chichi', 'ssaaas', 2]));

// EX5: Generic Constrains

// function logLength<T>(value: T): number | string {
//   if (typeof (value) === 'string' || Array.isArray(value)) {
//     let valueLength = value.length
//     return valueLength
//   }
//   else return 'no lenght for this type '
// }

// console.log(logLength('hellooooo'))
// console.log(logLength(false))
// console.log(logLength(2))
// console.log(logLength(['hellooooo', 'shalom', 'privetuli']))

// EX6:Intersection Types and Type Guards

// type Person = {
//   name: string,
//   age: number
// }

// type Job = {
//   position: string;
//   department: string;
// }

// type Employee = Person & Job

// function describeEmployee(person: Employee): string {
//   if (person.position === "Manager") { return 'Yo did a great job being manager' }
//   else if (person.position === "Developer") { return "Keep coding, slave" }
//   else return 'Nice try'
// }

// console.log(describeEmployee({
//   name: "Mimi",
//   age: 2,
//   position: 'housewife',
//   department: 'home'
// }))

// console.log(describeEmployee({
//   name: "Lola",
//   age: 32,
//   position: 'Manager',
//   department: 'LOL'
// }))

// console.log(describeEmployee({
//   name: "Shushu",
//   age: 42,
//   position: 'Developer',
//   department: 'SPS'
// }))

// EX7:Type Assertions and Generic Constraints

function formatInput<T extends { toString(): string }>(param: T): string {

  let strParam = param.toString() as string
  return strParam

}

console.log(formatInput('gi'))
console.log(formatInput(false))
console.log(formatInput(2))
console.log(formatInput(['hi', 2222]))
