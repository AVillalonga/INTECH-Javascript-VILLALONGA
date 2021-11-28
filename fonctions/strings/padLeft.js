function padLeft(char, str, quantity) {
    return char.repeat(quantity) + str;
}

const padZeros = padLeft.bind(null, "0");
const padSpaces = padLeft.bind(null, " ");

(() => {
    console.log(padLeft("x", "aaa", 10));
    console.log(padZeros("aaa", 10));
    console.log(padSpaces("aaa", 10));
})()