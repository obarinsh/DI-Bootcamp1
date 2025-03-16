import { peoples } from './data.js'

console.log(peoples);

function averAge(list) {
    const ages = peoples.map(person => person.age)
    let summAge = ages.reduce((acc, num) => acc + num, 0)
    let average = summAge / list.length
    console.log(`The average age is: ${average}`)
}

averAge(peoples)