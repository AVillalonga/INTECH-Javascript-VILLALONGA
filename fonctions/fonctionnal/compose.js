function compose(f, g) {
    return function(val) {
        return f(g(val));
    }
}

(() => {
    const increment = x => x + 1;
    const double    = x => x * 2;
    const square    = x => x ** 2;

    const doubleAndIncrement = compose(increment, double);
    const squareAndIncrement = compose(increment, square);
    
    console.log(doubleAndIncrement(2));
    console.log(squareAndIncrement(3));
})();