function split(str, sep) {
    const listResult = [];
    let tmpResult = "";
    let slice = "";
    let inc = 0;

    while(inc < str.length) {
        if(str[inc] === sep[0] && str.length > inc + sep.length) {
            slice = str.slice(inc, inc + sep.length);
            if(slice === sep) {
                str.substring(inc, sep.length);
                listResult.push(tmpResult);
                tmpResult = "";
                inc = inc + sep.length;
            } else {
                tmpResult = tmpResult + sep[0];
                inc = inc + 1;
            }
        } else {
            tmpResult = tmpResult + str[inc];
            inc = inc + 1;
        }
    }
    listResult.push(tmpResult);
    return listResult;
}

(() => {
    console.log(split("aaa..bbb..ccc.ddd", ".."));
    console.log(split("!aaa!bbb!ccc", "!"));
})()