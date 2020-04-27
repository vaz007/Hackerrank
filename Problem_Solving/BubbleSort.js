const bubbleSort = (arr) => {
    let isSorted =false
    let temp = 0
    let countSaps = 0
    while(!isSorted){
        isSorted = true
        for (let i=0; i <arr.length - 1; i++){
            if (arr[i] > arr [i+1]){
                temp = arr[i]
                arr[i] = arr[i +1]
                arr[i+1] = temp
                
                countSaps += 1
                isSorted = false
            }
        }
    }
    console.log(`Array is sorted in ${countSaps} swaps.`)
    console.log(`First Element : ${arr[0]}`)
    console.log(`Last Element : ${arr.slice(-1)}`)
}

bubbleSort([3,2,1])