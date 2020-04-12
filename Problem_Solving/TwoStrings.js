const twoStrings = (s1, s2) => {
   let charMap = {}
    for (let character of s1) {
        if (!charMap[character]) {
            const s1Letter = character
            charMap[s1Letter] = true

        } 
      }
      console.log(charMap)
      for (let character of s2) {
        if (charMap[character]) {
            console.log("Yes")
            return "Yes"
        } 
        
      }
        console.log("No")
        return "No"
        
    

      // for (let i =0; i<= s1.length - 1; i++){
    //     for (let j =0; j<= s2.length - 1; j++){
    //             if (s1[i] == s2[j] ){
    //                 answer = "YES"
    //               //  console.log("YES")
    //                 break;
    //             }
    //             else{
    //                 answer = "NO"
    //             }
    //     }
    //     if (answer === "YES"){
    //         break;
    //     }
    // }
   // console.log(charMap, charMap2)
    console.log(answer)
}
twoStrings("Hello", "World")
twoStrings("Hi", "World")
twoStrings("aardvark", "apple")

