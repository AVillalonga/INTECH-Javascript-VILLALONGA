class EZArray extends Array{
    get first() {
        return this[0]
    }
    get last() {
        return this[this.length - 1]
    }
}


let a = new EZArray();
console.log(a instanceof EZArray); // => true: instance de EZArray
console.log(a instanceof Array);  // => true: instance de Array aussi
console.log(a.push(1,2,3,4));      // a.length == 4; méthodes hérités
console.log(a.pop());               // => 4
console.log(a.first);               // => 1: first getter
console.log(a.last);              // => 3: last getter
console.log(a[1]);                // => 2: syntaxe habituelle d'accès aux élément du tableau
console.log(Array.isArray(a));      // => true
console.log(EZArray.isArray(a));    // => true
