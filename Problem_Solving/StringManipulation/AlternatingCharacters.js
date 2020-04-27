const AlternatingCharacters = (str) => {
    let deletions = 0

    str.split("").map((letter, index) => {
        console.log(letter, str[index + 1])
        if (letter === str[index+1]){
            deletions++
        }
    })
    console.log(deletions)
       
    return deletions
}

AlternatingCharacters("AAAA")