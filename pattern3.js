//Pattern Pyramid Align Center

let kelipatan = 5;
let str = "";
for (let i = 1; i <= kelipatan; i++) {
    for (let j = 1; j <= kelipatan - i; j++) {
        str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);