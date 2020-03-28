// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) /2)
        for (let rows =0; rows < n; rows++){
            let level = "" 
            for(let cols = 0; cols < 2 * n -1; cols++){
                  if (midPoint - rows <= cols && midPoint + rows >= cols){
                      level +="#"
                  }
                  else{
                      level += ' '
                  }
            }
            console.log(level)
        }
    
}
pyramid(5)

module.exports = pyramid;
