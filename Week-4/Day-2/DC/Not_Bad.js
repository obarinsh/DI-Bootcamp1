// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.


let sentence = "The movie is not that bad"
let words = sentence.split(" ");

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = words.indexOf('not')


// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = words.indexOf('bad')


if (wordBad > wordNot) {
    let new_sentence = [words.slice(0, wordNot), ' good'].join('')
    new_sentence = new_sentence.replace(/,/g, " ");
    console.log(new_sentence)

}
else { console.log(sentence) }

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.

