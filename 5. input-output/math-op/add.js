// add sebagai file yang berisi function operasi penjumlahan

// disini menggunakan function, bisa juga menggunakan arrow function 
function tambah(x, y) { 
    return x + y;
};
// function add di atas akan mengembalikan nilai dari penjumlahan x dan y 

// function ini akan di eksekusi ketika file ini di panggil
// dan file ini haruslah dapat digunakan pada file manapun

// caranya dengan mengexport function tersebut
module.exports = tambah;

// bisa juga di tulis seperti object

// module.exports = {
//     tambah,
// };