function deepEqual(a1, a2) {
    const a3 = a1.filter((v, i) => { 
        return Array.isArray(v) ? deepEqual(v, a2[parseInt(i)]) : v == a2[i]; 
    });
    return a3.length === a1.length;
}

(() => {
    const a1 = [1,2,[3,4],5];
    const a2 = JSON.parse(JSON.stringify(a1));
    console.log(a1 === a2);
    console.log(deepEqual(a1, a2));
})()