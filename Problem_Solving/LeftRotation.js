const leftRotation = (a, d) => {
    
    let tempArray = [];
    
    console.log(tempArray)
    for (let i=d; i<a.length; i++){
        console.log(a[i])   
        tempArray.push(a[i])
        
    }
    for (i =0; i<d;i++){
        tempArray.push(a[i])
    }
    console.log(tempArray)
    return (tempArray)
}
leftRotation([1,2,3,4,5], 4)
