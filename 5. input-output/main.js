// main sebagai file utama untuk menjalankan javascript
// const { tambah } = require("./add"); // penulisannya jika tadi di export menggunakan berbentuk object

const tambah = require("./math-op/add"); // memanggil file add.js dalam folder math-op tidak wajib menulis tipe filenya 
                                 // tambah adalah variabel yang berisi pemangil file
                                 // yang disimpan dalam require 
                                 // yang mana require digunakan untuk memanggil file
                                 // dengan membungkus file tersebut diperlukan ./

// const { kali } = require("./multiply"); // penulisannya jika tadi di export menggunakan berbentuk object
const kali = require("./math-op/multiply"); // memanggil file multiply di dalam folder math-op yang berisi function perkalian
                                    // pemanggilan disimpan dalam variabel kali pemanggil file dibungkus require

const {hasilnya} = require("./output"); // penulisannya berbentuk object
                                        // file output yang berisi function hasilnya 
//________________________________________________________________________________________________________________
let x = 2;
let y = 3;
// console.log(x + y); operasi matetamatika penjumlahan akan menampilkan angka 5

console.log("hasil dari penjumlahan : " + tambah(x, y)); // operasi matetamatika akan menampilkan angka 5
                           // dimana tambah adalah variabel yang berisi pemangil file add
                           // yang berisi function operasi penjumlahan
                           // hasil yang tampil : 5

console.log("hasil perkalian : " + kali(x, y)); // hasil perkalian yang tampil : 6

console.log(hasilnya()); // memanggil function hasilnya dan hasilnya adalah "hasilnya adalah : undefined" 
                         // karena tanda kurung yang di bungkus hasilnya tidak diisi

// menggabungkan function yang telah di import dari file lain

penjumlahan = tambah(x, y);
perkalian = kali(x, y);

console.log(hasilnya(`untuk penjumlahan ${penjumlahan} + dan untuk perkalian ${perkalian}`));