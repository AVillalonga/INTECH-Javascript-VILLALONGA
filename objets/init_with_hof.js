function initWith(f) {
    return function(size, nb) {
        return !nb ?    Array.apply(null, Array(size))
                             .map((v, i) => f()):
                        Array.apply(null, Array(size))
                             .map((v, i) => f(i, nb));
    }
}

(() => {
    const initWithZeros = initWith(() => 0);
    const initFrom = initWith(function (index, initial) {
        return initial + index;
    });
    console.log(initWithZeros(3));
    console.log(initFrom(3, 42));
})();