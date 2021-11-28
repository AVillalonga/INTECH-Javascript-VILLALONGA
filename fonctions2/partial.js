function partial(callback, value) {
    return callback.bind(null, value);
}

(() => {
    const f = (x, y, z) => x * (y - z);
    const newMethod = partial(f, 2);
    console.log(newMethod(5, 6));
})();