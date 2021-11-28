function padRight(char, str, quantity) {
    return str + char.repeat(quantity);
}

const padZeros = padRight.bind(null, "0");
const padSpaces = padRight.bind(null, " ");

(() => {
    console.log(padRight("x", "aaa", 10));
    console.log(padZeros("aaa", 10));
    console.log(padSpaces("aaa", 10));
})()