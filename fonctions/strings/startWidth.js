function startWith(str, start) {
    if(start.length > str.length) { return false; }
    for(const index in start) {
        if(str[index] !== start[index]) {
            return false;
        }
    }
    return true;
}

(()=>{
    console.log(startWith("zumba", "zum"));
    console.log(startWith("cafeoo", "xafe"));
})()