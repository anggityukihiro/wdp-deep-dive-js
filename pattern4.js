//Pattern Number

let kelipatan_baris = 10;
let kelipatan_kolom = 20;
let str = "";

for (let i = 0; i <= kelipatan_baris; i++) {
    for (let j = 0; j < kelipatan_kolom; j++) {
        str += ((kelipatan_kolom - kelipatan_baris) * i) + j + '\t';
    }
    str += '\n';
}

console.log(str);