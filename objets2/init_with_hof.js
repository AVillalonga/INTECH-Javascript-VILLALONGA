function initWith(f) {
    return (size, nb = 0) => {
        const res = [];
        for (let index = 0; index < size; index++) {
            res.push(f(nb + index));
        }
        return res
    }
}

const initWithZeros = initWith(() => 0);
const initFrom = initWith(index => index);

console.log(initWithZeros(3)); // [0, 0, 0]
console.log(initFrom(3, 42)); // [42, 43, 44]