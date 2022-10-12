let arr = [-8, -5, -1, 0, 1, 2, 3, 4, 5, 6, 7];
let key = 5;
let start = 0;
let end = arr.length - 1;

function binSearchRec(start, end){

        if(start > end) return -1;
        let mid = Math.floor((start + end) / 2);
        if(key == arr[mid]) return mid;
        if(key > arr[mid]) return binSearchRec(mid + 1, end);
        return binSearchRec(start, mid - 1);
}

console.log("Binary search result - ", binSearchRec(start, end));