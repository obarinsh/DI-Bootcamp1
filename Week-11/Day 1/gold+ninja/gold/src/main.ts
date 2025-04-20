// Ex1:

// type typeOfParam = string | number

// const processValue = (param: typeOfParam) => {
//   if (typeof (param) === 'number') {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(param)
//   }
//   else if (typeof (param) === 'string') {
//     let result = ''
//     for (let i = param.length - 1; i >= 0; i--) {
//       result += param[i]
//     }
//     return result
//   }
//   else {
//     return (console.log('wrong type of param'))
//   }
// }

// console.log(processValue(2))
// console.log(processValue('hello world'))
// console.log(processValue('3d'))

// Ex2:

// type typeOfArray = (number | string)[]
// const sumNumbersInArray = (array: typeOfArray) => {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//       sum += array[i] as number
//     }
//   }
//   return sum
// }

// console.log(sumNumbersInArray([1, 'rrr', 12]))

// Ex3:

// type AdvancedUser = {
//   name: string
//   age: number
//   address?: string
// }

// const introduceAdvancedUser = (user: AdvancedUser) => {
//   const addressPart = user.address ? ` from ${user.address}` : ''

//   return `Hello ${user.name},${user.age}${addressPart} `
// }

// console.log(introduceAdvancedUser({
//   name: 'olga',
//   age: 32,
//   address: "tlv"
// }))

// // Ex4:

// const welcomeUser = (name: string, greeting = 'Hello') => {

//   return `${greeting},${name}`
// }

// console.log(welcomeUser('olga'))

// console.log(welcomeUser('Lancelot', "Hello my Lord"))


// Ninja:


// Ex1:
// type MappedType = string | number


// const mapType = (input: MappedType) => {
//   if (typeof (input) === 'number') return (input ** 2)
//   else if (typeof (input) === 'string') {
//     return input.length
//   }

// }

// console.log(mapType(2))
// console.log(mapType("hello world"))

// Ex2:
// type userobj = {
//   name: string,
//   age: number,
// }

// const getProperty = (user: userobj, key: keyof userobj) => {
//   return user[key]
// }


// console.log(getProperty({ name: 'olga', age: 32 }, 'name'))

// Ex3:

interface HasNumericProperty {
  age: number,
  dateOfBirth: number
}

const multiplyProperty = (
  obj: HasNumericProperty,
  key: keyof HasNumericProperty,
  factor: number): number => {
  return (obj[key] as number) ** factor
}

console.log(multiplyProperty({ age: 3, dateOfBirth: 1990 }, 'age', 2));
console.log(multiplyProperty({ age: 3, dateOfBirth: 1990 }, 'dateOfBirth', 2));