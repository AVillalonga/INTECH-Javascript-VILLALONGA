function forEachOwnProperty(callback) {
    Object.entries(this).forEach((v) => {
        callback(v[0]);
    });
}

Object.defineProperty(Object.prototype, 'forEachOwnProperty', { value: forEachOwnProperty });


(()=> {
    const o1 = { a: 1 };
    const o2 = Object.create(o1);
    o2.b = 2;
    o2.c = 3;

    const props = [];
    o2.forEachOwnProperty(prop => props.push(prop));
    console.log(props);
})()