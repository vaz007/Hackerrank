const compareArray = (a, b) => {
    let alice = 0
    let bob = 0
    let results = [];
    for(let i =0; i < a.length; i++){
        for(let j=0; j < b.length; j++){
            if(a[i] < b[j] && i == j){
                bob = bob +1;
            }
            else if (a[i] > b[j] && i == j){
                alice = alice + 1;
            }
        }
    }
    results.push(alice, bob);
    console.log(results);
    return(results);
}
compareArray([5, 6, 7],[3,6,10])
