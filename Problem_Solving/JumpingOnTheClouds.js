const jumpingOnTheClouds = (c) => {

    let jumps = 0;

    let i = 0;
    while(i < c.length - 1){
        if(i + 2 == c.length || c[i + 2] == 1){
            jumps += 1
            i++
        }
        else{
            jumps ++
            i+=2
        }
    }
    console.log(jumps)
    return jumps
}

jumpingOnTheClouds([0,0,1,0,0,1,0])