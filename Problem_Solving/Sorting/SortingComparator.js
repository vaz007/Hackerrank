const activityNotifications = (expenditure, d) => {
  let notifications = 0;
  let len = expenditure.length - 1;
  for (let i = len; i > d - 1; i--) {
    console.log();
    let trailaingDays = expenditure.slice(i - d, i)
    // console.log(trailaingDays)
    let dayExpense = expenditure[i]
    let median = getMedianNumber(trailaingDays);

    if (expenditure[i] >= median * 2) {
      notifications++;
    }
  }
  console.log(notifications)
  return notifications;
};

function getMedianNumber(arr) {
    arr.sort((a,b)=> a-b)

    
  let medianNumber = 0;
  const middle = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    medianNumber = (arr[middle] + arr[middle - 1]) / 2;
  } else {
    const index = Math.floor(middle);
    medianNumber = arr[index];
  }
  return medianNumber;
}

activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5);
/* 

Slice the array till d
sort the array to find median 
divide d by 2 and get take that number as an index and get the value 
from sorted array


Now multiply the median and check it with the d element




*/
