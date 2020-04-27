const colors = str => {


    let newStr = ''
    let counter = 0 // o for windy and 1 for Bob
    let i=0;
    while(i <= str.length){
        if (i+1 === "w" && i-1 === "w"){
            counter++
            newStr = str.substr(i)
            for (let j=0; j<newStr.length; j++){
                if (j+1 === "B" && j-1 === "B"){
                    newStr = str.substr(j)
                    counter--
                }
                else{
                    break
                
                }
             
            }
            
           
        }else if (str.length <= 2 && str === "ww" || str ==="wb"){
            counter++
        }
    return counter === 0 ? "Wendy" : "BoB"
}

colors("wb")