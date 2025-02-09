// array object adalah object yang disimpan di dalam array jadi object-object yang tersimpan menjadi index dari array
// yang nantinya dapat di manipulasi index index tersebut

const menu1 = {
    name : "nasi goreng",
    price : 10000,
}
const menu2 = {
    name : "bakso",
    price : 15000,
}
const menu3 = {
    name : "sate",
    price : 20000,
}
// terdapat 3 object yang berbeda property di atas

const AllMenu = [menu1, menu2, menu3, {name : "mie ayam"  , price : 12000}]; // terdapat 4 object yang berbeda property
// object ke 4 lansung ditulis property dan valuenya yang terbungkus dalam kurung kurawal dalam array
// dan ini juga bisa di sebut array object tanpa disimpan dalam sebuah variabel

console.log(AllMenu); // akan tampil :
// [ { name: 'nasi goreng', price: 10000 },
//   { name: 'bakso', price: 15000 },
//   { name: 'sate', price: 20000 },
//   { name: 'mie ayam', price: 12000 } ] // ke 4 object tetap di tampilkan
console.log("___________________________________________________________________________________________________");
// jika ingin di tampilkan dengan rapih bisa menggunakan cara berikut
// menggunakan forEach()

AllMenu.forEach((menu, idx) => { 
    console.log(`${idx + 1}. nama menu : ${menu.name} | harga : ${menu.price}`);
})
// cara membacanya seperti berikut :
// 1. array dengan nama AllMenu memiliki value yaitu menu1, menu2, menu3, dan {name : "mie ayam"  , price : 12000}
// 2. kemudian variabel array dengan nama AllMenu menggunakan method forEach() 
//    karena kita akan melakukan perulangan terhadap array AllMenu
// 3. lalu di dalam forEach() berisi callback function dengan 2 parameter yaitu menu dan idx
// 4. dan saat ingin di tampilkan dalam console.log() kita menggunakan template literal
// 5. idx + 1 berarti index akan di tambah 1 karena index dimulai dari 0 yang nantinya akan menampilkan 1. untuk index 0
// 6. menu.name berarti callback function akan memanggil property name dari object yang berisi property name
// 7. dan menu.price berarti callback function akan memanggil property price dari object yang berisi property price

console.log("___________________________________________________________________________________________________");
// bisa juga menggunakan for loop

for (let i = 0; i < AllMenu.length; i++) {
    console.log(`${i + 1}. nama menu : ${AllMenu[i].name} | harga : ${AllMenu[i].price}`);
};
// cara membacanya seperti berikut :
// 1. memanggil for untuk melakukan perulangan
// 2. lalu i = 0 artinya index dimulai dari 0
// 3. i < AllMenu.length artinya jika i kurang dari panjang array AllMenu 
// 4. pada AllMenu terdapat 5 index mulai dari index 0 - index 4 maka kondisi akan true atau terpenuhi
// 5. maka i akan bertambah 1 setiap perulangan
// 6. dalam console.log() membungkus i + 1 artinya index akan di tambah 1 karena index dimulai dari 0
//    maka yang tampil pada index 0 adalah 1.
// 7. dan AllMenu[i].name artinya callback function akan memanggil property name 
//    dari array allMenu yang berisi property name [i] yang didalamnya berarti index
// 8. dan AllMenu[i].price artinya callback function akan memanggil property price dari array allMenu
// 9. hasil yang tampil akan sama persisi dengan forEach()