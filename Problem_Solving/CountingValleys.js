const countingValleys = (n, s) => {

    let altitude = 0
    let valleys = 0;
    let i=0;
    while (i < n){
        s.split("").map(stream => {
            console.log(stream)
            if (stream == "U"){
                if(altitude == -1){
                    valleys +=1
                }
                altitude += 1
                i++
            }
            else if (stream == "D"){
                altitude -= 1
                i++
            }
        })
    }
    console.log(valleys)
    return(valleys)

}

countingValleys(8, "UDDDUDUU")