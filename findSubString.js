function findSubString(str, searchText){
    if(str.length < searchText.length) return -1;
    for(let i = 0; i < str.length; ++i){
        let position = i;
        let j = 0;
        while(j < searchText.length){
            if(searchText[j] !== str[i]) break;
            if(j == searchText.length - 1) return position;
            ++i;
            ++j;
        }
    }
    return -1;
}

console.log("Find substring - ", findSubString("hello", "el"));