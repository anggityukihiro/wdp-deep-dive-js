//Pattern Triangle Margin Right

let kelipatan = 5;
let str = "";

for (let i = 0; i <= kelipatan; i++) {
    for (let j = 0; j <= kelipatan; j++) {
        if (i + j > kelipatan) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    str += ('\n');
}

console.log(str);