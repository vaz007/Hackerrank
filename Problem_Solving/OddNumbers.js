/* 
    find odd numbers between two numbers
*/

function oddNumbers (l,r){
    const result = [];
    for(i = l; i <= r; i++)
    if(i % 2 == 1){
        result.push(i);
    }
    console.log(result);
}
oddNumbers(2, 5)

