//Pattern Triangle Margin Left

let kelipatan = 5;
let str = "";

for (let i = 0; i < kelipatan; i++) {
    for (let j = 0; j <= i; j++) {
        str += '*';
    }
    str += '\n';
}

console.log(str);