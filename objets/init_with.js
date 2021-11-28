function initWith(size, f) {
    return Array    .apply(null, Array(size))
                    .map((v, i) => f(i));
}

(() => {
    const widthZero = () => 0;
    const fromZero = index => index;
    const from42 = index => 42 + index;
    console.log(initWith(5, widthZero));
    console.log(initWith(5, fromZero));
    console.log(initWith(5, from42));
})()