function miniMaxSum(arr) {
    var max = Math.max(...arr)
    var min = Math.min(...arr)

    var filteredForMax = arr.filter(el => el > min)
    
    var sumMax = 0;
    for (var i = 0; i < filteredForMax.length; i++) {
        sumMax = sumMax + filteredForMax[i];
    }

    var filteredForMin = arr.filter(el => el < max) 

    var sumMin = 0;
    for (var j = 0; j < filteredForMin.length; j++) {
        sumMin = sumMin + filteredForMin[j];
    }

return [sumMin, sumMax]