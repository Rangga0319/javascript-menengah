// Dalam JavaScript, ada dua cara utama untuk mengirim (mengoper) nilai ke dalam fungsi atau variabel lain:

// Pass by Value (Lewat Nilai)

// Digunakan untuk tipe data primitif seperti number, string, boolean, null, undefined, dan symbol.
// Saat sebuah nilai dikirim, JavaScript membuat salinan baru dari nilai tersebut, sehingga perubahan 
// yang dilakukan di dalam fungsi tidak mempengaruhi nilai aslinya.
// Contoh:


let a = 10;
let b = a;  // b mendapat salinan nilai dari a
b = 20;      // hanya b yang berubah, a tetap 10
console.log(a); // Output: 10
console.log(b); // Output: 20

// Pass by Reference (Lewat Referensi)

// Digunakan untuk tipe data non-primitif seperti object dan array.
// Saat sebuah nilai dikirim, JavaScript mengirimkan referensi (alamat) dari memori yang menyimpan data tersebut, bukan membuat salinan baru.
// Akibatnya, perubahan yang dilakukan pada objek di dalam fungsi juga akan mempengaruhi objek aslinya.

// Contoh:

let obj = { name: "Eto" };
let obj2 = obj;  // obj2 mengacu pada objek yang sama dengan obj
obj2.name = "Yuuki"; // Mengubah obj2 juga mengubah obj

console.log(obj.name); // Output: "Yuuki"
console.log(obj2.name); // Output: "Yuuki"

// Kesimpulan:

// Pass by Value → Mengirim salinan nilai (berlaku untuk tipe data primitif).
// Pass by Reference → Mengirim alamat memori dari objek asli (berlaku untuk tipe data non-primitif).

//______________________________________________________________________________________________________________

// Bayangkan kamu punya kertas catatan dan fotokopi dari kertas catatan itu.

// Pass by Value (Seperti Fotokopi)
// Jika kamu memberikan fotokopi dari catatan ke temanmu, dia bisa menulis atau menghapus apapun di fotokopi itu, 
// tetapi catatan aslimu tidak berubah.

let x = 10;
let y = x; // y mendapatkan salinan dari x
y = 20; // hanya y yang berubah, x tetap 10

console.log(x); // Output: 10 (tidak berubah)
console.log(y); // Output: 20

// 📌 Hanya salinannya yang berubah, bukan aslinya.

// Pass by Reference (Seperti Berbagi Catatan Asli)
// Sekarang, bayangkan kamu memberikan catatan aslimu ke temanmu. Jika dia mengubah isi catatan, 
// catatan aslimu juga berubah.


let obj1 = { name: "Eto" };
let obj2 = obj1; // obj2 mengacu ke objek yang sama

obj2.name = "Yuuki"; // Mengubah obj2 juga mengubah obj1

console.log(obj1.name); // Output: "Yuuki" (obj1 ikut berubah)
console.log(obj2.name); // Output: "Yuuki"

// 📌 Karena berbagi referensi (alamat memori), perubahan pada satu akan mempengaruhi yang lain.

// Ringkasan Simpel
// Pass by Value → Mengirim salinan, perubahan tidak mempengaruhi nilai asli.
// Pass by Reference → Mengirim alamat asli, perubahan mempengaruhi nilai asli.
// Jadi kalau pakai tipe data primitif (number, string, boolean), JavaScript membuat fotokopi (pass by value).
// Tapi kalau pakai object atau array, JavaScript berbagi catatan asli (pass by reference).