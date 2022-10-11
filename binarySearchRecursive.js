let arr = [-8, -5, -1, 0, 1, 2, 3, 4, 5, 6, 7];
let key = 2;

function binSearchRec(arr, key){
    let start = 0;
    let end = arr.length - 1;
    function check(start, end){
        if(start > end) return -1;
        let mid = Math.floor((start + end) / 2);
        if(key == arr[mid]) return mid;
        if(key > arr[mid]) return check(mid + 1, end);
        return check(start, mid - 1);
    }
    return check(start, end);
}

console.log("Binary search result - ", binSearchRec(arr, key));