function* zip(...iterables) {
    const iterators = iterables.map(x => x[Symbol.iterator]());
    while (true) {
        const current = iterators.map(x => x.next());
        if (current.some(x => x.done)) {
            break;
        }
        yield current.map(x => x.value);
    }
}

console.log([...zip("abc", [1, 2, 3])]);
console.log([...zip("abcd", "1234", "+-=?")])