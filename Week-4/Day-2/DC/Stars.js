// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops(Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet


// let asterick = ''
// for (i = 0; i < 5; i++) {
//     asterick += '*'
//     console.log(asterick)
// }



let rows = 5;

for (let i = 1; i <= rows; i++) {
    let asterick = ''
    for (let j = 1; j <= i; j++) {
        asterick += "*";
    }
    console.log(asterick);
}