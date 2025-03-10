// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

console.log(isAnagram('Astronomer', 'Moon starer'))
function isAnagram(firstString, secondString) {
    let word1 = firstString.toLowerCase().replace(/\s+/g, '');
    let word2 = secondString.toLowerCase().replace(/\s+/g, '');
    if (word1.length !== word2.lenght) {
        return false
    }
    let letterWord1Count = {};
    let letterWord2Count = {};
    for (let i = 0; i < word1.length; i++) {
        let letter = word1[i]
        letterWord1Count[letter] = (letterWord1Count[letter] || 0) + 1;
    }
    for (let j = 0; j < word2.length; j++) {
        let letterCount = word2[j]
        letterWord2Count[letterCount] = (letterWord2Count[letterCount] || 0) + 1;
    }
    for (let key in letterWord1Count) {
        if (letterWord1Count[key] !== letterWord2Count[key]) {
            return false;
        }
    }
    return true
}

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.




