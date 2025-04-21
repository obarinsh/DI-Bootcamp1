
// Ex1:

// class Employee {
//   private name: string
//   private salary: number
//   public position: string
//   protected department: string

//   constructor(name: string, salary: number, position: string, department: string) {
//     this.name = name
//     this.salary = salary
//     this.position = position
//     this.department = department
//   }

//   getEmployeeInfo() {
//     return `${this.name} is on ${this.position} posiiton`
//   }
// }

// let person = new Employee('Olga', 100, 'Engineer', 'Yeild')
// console.log(person.getEmployeeInfo())

// Ex2:

// class Product {
//   readonly id: number
//   public name: string
//   public price: number

//   constructor(id: number, name: string, price: number) {
//     this.id = id
//     this.name = name
//     this.price = price
//   }

//   getProductInfo(): string {
//     return `This is ${this.name} and its price is ${this.price}$`
//   }
// }


// let item1 = new Product(1, 'cocacola', 2)
// console.log(item1.getProductInfo())
// item1.id = 2
// item1.name = 'sprite'
// item1.price = 4
// console.log(item1.getProductInfo())

// Ex3:

// class Animal {
//   name: string

//   constructor(name: string) {
//     this.name = name

//   }
//   makeSound(): string {

//     return `${this.name} know how to make a sound`
//   }

// }

// class Dog extends Animal {
//   override makeSound(): string {
//     return `${this.name} says: Bark!`
//   }
// }

// let doggo = new Dog('Barry')
// console.log(doggo.makeSound())

// Ex4:

// class Calculator {
//   static add(a: number, b: number): number {
//     return a + b
//   }

//   static subtract(a: number, b: number): number {
//     return a - b
//   }
// }

// console.log(Calculator.add(2, 3))
// console.log(Calculator.subtract(1, 10))

// Ex5:

interface User {
  readonly id: number
  name: string,
  email: string

}

interface PremiumUser extends User {
  membershipLevel?: string
}


function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`)
  console.log(`Name: ${user.name}`)
  console.log(`Email: ${user.email}`)

  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`)
  } else {
    console.log("Membership Level: non")
  }
}

let user: PremiumUser = {
  id: 6,
  name: "olga",
  email: "sababa@hi.com",
  membershipLevel: 'Gold'
}

printUserDetails(user)