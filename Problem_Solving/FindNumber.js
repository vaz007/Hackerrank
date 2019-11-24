/*
    find a number in an array 
    and if it is present then print yes else NO
*/

const findNumber = (arr, k) => {
  
    let value = '';
  for(i =0 ; i< arr.length; i++){
    if (arr[i] !== k) {
        value = "NO"
        console.log("NO");
        
        // return "YES"
        // break;
      }
      else{
        console.log("YES");
        value = "YES"
        break;
      } 
  }
  console.log("val", value);
};
findNumber([1, 2, 3, 4, 5], 6);



