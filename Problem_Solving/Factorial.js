const factorial = n => {
   let q =  n <= 1 ? 1 : n * factorial(n -1)
    console.log(q)
    return q
}
factorial(2)
