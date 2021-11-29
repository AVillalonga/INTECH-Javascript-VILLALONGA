class Range {
    // Initialise l'objet
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    // Dit si `x` tombe dans l'interval [from; to]
    includes(x) {
        if (this.from <= this.to) {
            return(this.from <= x && this.to >= x)
        } else {
            return(this.to <= x && this.from >= x)
        }
    }

    // Produit une chaîne de caractère sous la forme "(from...to)", par exemple "(2...8)"
    //toString();

    // Analyse une chaîne de caractère au format "(from...to)" et retourne une nouvelle instance
    static parse(s) {
        let array = this.integerRangePattern.exec(s)
        if(array != null) {
            return new Range(array[1], array[2]);
        }
    }

    // RegExp pour analyser la chaîne avec parse
    static integerRangePattern = /^[(](-?\d+)[.]{3}(-?\d+)[)]$/;
}

class Span extends Range {
    constructor(from, span) {
        // code qui ne touche pas à this
        const osuper = span > 0 ? [from, from + span] : [from + span, from]; //brainfuck
        super(...osuper);
        // tu peux toucher au this
    }
}

Range.prototype.toString = function () {
    return `(${this.from}...${this.to})`
} 

const range = new Range(1, 5);
console.log(range.from);
console.log(range.to);
console.log(range.includes(5));
console.log(range.toString());
console.log(Range.parse("(12...-2000000)"));
console.log(Range.parse("(12...2000000)"));


console.log((new Span(2, 4)).toString()); // => "(2...6)"
console.log((new Span(12, -8)).toString()); // => "(4...12)"