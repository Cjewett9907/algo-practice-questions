// assume the set is sorted

// divide the set in half
// check if the middle element is the target
// if so return
// else ccompare the middle element to the target and find the appropriate section for the recursive call.

const bSearch = function (array, target){

    midIdx = Math.floor(array.length / 2)

    if (array[midIdx] === target){
        return midIdx
    } else if (array[midIdx] < target ) {
        bSearch(array.slice(midIdx, -1))
    } else if (array[midIdx] > target) {
        bSearch(array.slice(0, midIdx))
    }
}

//  If given a set of standard input it is possible develop a targeted method
// i.e. If a person is asked to find a 'X' word in the dictionary 
// he doesn't split the dictionary 50-50 in a standard binary search pattern
// he splits it 90-10 then 50-50 etc...

// interesting concept worth investigating...