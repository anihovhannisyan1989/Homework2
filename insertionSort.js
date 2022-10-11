let arr1 = [8, 5, 3, 1, 4, 2, 7, 6];

function insertionSort(arr1){
    for(let i = 1; i < arr1.length; ++i){
        let current = arr1[i];
        let j = i - 1;
        while(arr1[j] > current){
            arr1[j + 1] = arr1[j];
            --j;
        }
        ++j;
        arr1[j] = current;
    }
    return arr1;
}

console.log("Unsorted array - ", arr1);
console.log("Insertion Sort result - ", insertionSort(arr1));