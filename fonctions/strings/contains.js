function contains(haystack, needle, startIndex=0) {
    if(startIndex < 0 || startIndex > haystack.length || needle.length + startIndex > haystack.length) {
        return -1;
    }

    for(const i in needle) {
        if(haystack[startIndex + parseInt(i)] != needle[i]) {
            return false;
        }
    }

    return true;
}

(() => {
    console.log(contains("haystack", "stack", 3));
    console.log(contains("bullshit", "bull"));
    console.log(contains("bullshit", "shit", 1));
})()