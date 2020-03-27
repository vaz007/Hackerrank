console.log("FizzBuzz")

function fizzBuzz (number) {
    for(i=0; i <= number; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz", i )
            
        }
        else if (i % 3 === 0){
            console.log("Fizz", i)
        }
        else if (i % 5 === 0){
            console.log("Buzz", i)
        }
        else {
            console.log(i)
        }
    }
}
fizzBuzz (100)