function checkIsUnique(str){
    let arr = str.split(" ").join("").split("");
    let obj = {};
    for(let char of arr){
        if(obj[char]) return false;
        obj[char] = char;
    }
    return true;
}

console.log("Check is unique - ", checkIsUnique("false"));