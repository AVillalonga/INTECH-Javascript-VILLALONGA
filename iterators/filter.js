function filter(iterable, f) {
    let i = 0
    let len = iterable.length
    return { 
        next : function(){
            let result;
            for (;i < len; i++){
                if (f(iterable[i])) {
                    result = {value:iterable[i], done:false}
                    i++
                    return result
                }
            }
            return { value: -1, done: true }
        }
    }
}

const iterator = filter("hello", v => "aeiouy".includes(v));
console.log(iterator.next().value) // => "e"
console.log(iterator.next().value) // => "o"
console.log(iterator.next().done) // => true