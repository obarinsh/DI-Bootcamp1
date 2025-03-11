// 1st daily challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words 
// as an argument
// If all the words in the array are strings, resolve the promise. 
// The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words 
// uppercased as an argument
// If the array length is bigger than 4, resolve the promise. 
// The value of the resolved promise is the array of words sorted in
//  alphabetical order.
// else, reject the promise with a reason.


// function makeAllCaps(arrOfWords) {
//     return new Promise(function (resolve, reject) {
//         for (let i = 0; i < arrOfWords.length; i++) {
//             let item = arrOfWords[i]
//             if (typeof (item) !== 'string') {
//                 return reject('One of the items is not a string!')
//             }
//         }
//         let newArray = arrOfWords.map(word => word.toUpperCase())
//         return resolve(newArray)

//     })
// }


// function sortWords(uppercasedArray) {
//     return new Promise(function (resolve, reject) {
//         if (uppercasedArray.length <= 4) {
//             return reject('Its too short!')
//         }
//         let sortedArray = uppercasedArray.sort()
//         resolve(sortedArray)
//     })

// }


// makeAllCaps(['hello', 'world'])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// makeAllCaps([3, 'world'])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// makeAllCaps(['many', 'miles', 'away', 'super', 'cucumber'])
//     .then(uppercasedArray => sortWords(uppercasedArray))
//     .then(sortedArray => console.log("Sorted Array:", sortedArray))
//     .catch(error => console.log("Error:", error));

// makeAllCaps(['many', 3333])
//     .then(uppercasedArray => sortWords(uppercasedArray))
//     .then(sortedArray => console.log("Sorted Array:", sortedArray))
//     .catch(error => console.log("Error:", error));

// makeAllCaps(['many', 'times', 'again'])
//     .then(uppercasedArray => sortWords(uppercasedArray))
//     .then(sortedArray => console.log("Sorted Array:", sortedArray))
//     .catch(error => console.log("Error:", error));


const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
// Create three functions.The two first functions should return 
// a promise..

// The first function is named toJs():
// this function converts the morse json string provided above 
// to a morse javascript object.
// if the morse javascript object is empty, throw an error(use reject)
// else return the morse javascript object(use resolve)
// toJs()
function toJs() {
    return new Promise(function (resolve, reject) {
        if (morse.length === 0) {
            return reject('Object is empty')
        }
        let morseJS = JSON.parse(morse)
        resolve(morseJS)
    })
}

// toJs()
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// The second function called toMorse(morseJS), takes one argument:
//  the new morse javascript object.
function toMorse(morseJS) {
    return new Promise(function (resolve, reject) {
        let userInput = prompt('please enter your word or sentence:')
        userInput = userInput.replace(/\s/g, "")
        let output = []
        for (let char of userInput) {
            if (!(char in morseJS)) {
                return reject('Input symbol doesnt exists in morse vocabulaty')
            }
            output.push(morseJS[char])
            resolve(output)
        }
    })
}

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse
// javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this 
// value["....", ".", ".-..", ".-..", "---"]
// if the user entered the word "¡Hola!", the promise rejects because 
// the character "¡" doesn't exist in the morse javascript object

function joinWords(morseTranslation) {
    let newDiv = document.createElement('div')
    document.body.appendChild(newDiv);
    for (let i = 0; i < morseTranslation.length; i++) {
        let textNode = document.createTextNode(morseTranslation[i])
        let breakLine = document.createElement('br')

        newDiv.appendChild(textNode)
        newDiv.appendChild(breakLine)
    }

}
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log("Error:", error))
// The third function called joinWords(morseTranslation), takes one
// argument: the morse translation array

// this function joins the morse translation by using line break and
//  display it on the page(ie.On the DOM)