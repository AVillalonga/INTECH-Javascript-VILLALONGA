function dump(obj) {
    const entries = Object.entries(obj);
    const lastKey = entries[entries.length-1][0];
    const returnLine = (curr) => curr == lastKey ? "\n" : ",\n";
    
    let result = "";
    for (let [key, value] of entries) {
        value = typeof value == "string" ? `"${value}"` : 
                Array.isArray(value) ? `[${value}]` : value;
        result += `\t${key}: ${value}` + returnLine(key);
    }
    return `{${result}}`;
}

const obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];    
console.log(dump(obj));
