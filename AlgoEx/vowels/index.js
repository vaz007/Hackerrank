// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    str = str.toLowerCase()
    let count =0
    const vowels = ['a', 'e', "i", "o", "u"];
    for (let i=0; i < str.length; i++){
        vowels.map(v => {
            if (v === str[i]){
              count +=1
            }
        })
    }
    console.log(count)
    return count
}
vowels('AEIOU')
module.exports = vowels;
