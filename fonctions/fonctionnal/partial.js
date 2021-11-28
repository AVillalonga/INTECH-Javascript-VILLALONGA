function partial(callback, ...args) {
    return callback.bind(null, ...args);
}

(() => {
    const f = (x, y, z) => x * (y - z);
    const newMethod = partial(f, 2);
    console.log(newMethod(5, 6));
})();