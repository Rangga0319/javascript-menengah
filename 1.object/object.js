// object hampir sama dengan array yang dimana menyimpan banyak value 
// jika ingin mengambil value dari array maka menggunakan index
// sedangkan pada object menggunakan property / key

// ini adalah contoh array menggunakan kurung siku []
const users = ["Rangga", "Alvina", "Ata"]; // setiap index array tidak saling berhubungan dengan index lain 
console.log(users);

// ini adalah contoh object menggunakan kurung kurawal {}
// yang mana di dalamnya berisi property / kry dan valuenya
const product = {
laptop : "Asus", // property laptop dan valuenya adalah Asus
price : 5_000_000,// property price dan valuenya adalah 5_000_000
}
console.log(product); // akan tampil : { laptop: 'Asus', price: 5000000 }
console.log(product.laptop); // akan tampil : Asus, jika ingin mengambil salah satu property / key dari object

// bisa juga dengan menggunakan kurung siku yang membungkus key dengan string
console.log(product["laptop"]); // akan tampil : Asus

console.log("___________________________________________________________________________________________________")
//______________________________________________________________________________________________________________

const smartphone = {
    brand : "Samsung", 
    "official-price" : 6000_000, // jika ingin menulis property dengan lebih detail space bisa di ganti dengan
    // underscore _ atau dash -    
}
// tapi saat ingin di panggil wajib menggunakan kurung siku yang propertinya terbungkus dengan string
console.log(smartphone["official-price"]); // akan tampil : 6000000

// cara agar menambahkan baru property / key dalam object di atas
smartphone.price = 5_000_000; 
console.log(smartphone); // akan tampil : { brand: 'Samsung', 'official-price': 6000000, price: 5000000 }
// terdapat property baru yaitu price dan valuenya adalah 5_000_000 di dalamnya

// cara agar mengubah value property / key dalam object di atas
smartphone["official-price"] = 6_000_000;
console.log(smartphone); // akan tampil : { brand: 'Samsung', 'official-price': 6000000 }
// value dari property official-price sudah di ubah

// cara agar menghapus property / key dalam object di atas
delete smartphone.price;
console.log(smartphone); // akan tampil : { brand: 'Samsung', 'official-price': 6000000 }
// property price sudah di hapus
//______________________________________________________________________________________________________________
console.log("___________________________________________________________________________________________________")
// membuat object baru di dalam object
const student = {
    name : "priscilla",
    age : 20,
    alive : true,
    address : {
        country : "volacia",
        kingdom : "volacia kingdom"
    }
}
console.log(student); 
// akan tampil : { name: 'priscilla', age: 20, address: { country: 'volacia', kingdom: 'volacia kingdom' } 

// dan jika ingin mengakses object di dalam object
console.log(student.address.country);
// akan tampil : volacia

// dan tidak ada batasan untuk membuat object di dalam object jika ingin membuat object di dalam object lagi 
// maka proprty harus menggunakan kurung kurawal {} lengkap dengan property dan value didalamnya
//_____________________________________________________________________________________________________________
console.log("___________________________________________________________________________________________________")
// membuat array di dalam object
const healtyFood = {
    fruits : ["apple", "banana", "orange"],  
}
// dan jika ingin mengakses array di dalam object
console.log(healtyFood.fruits);

// jika ingin mengakases satu item dari array di dalam object
console.log(healtyFood.fruits[1]); 
// akan tampil : banana
//____________________________________________________________________________________________________________
console.log("___________________________________________________________________________________________________")
// membuat function di dalam object

const greeting = {
    time : "morning",
    sayGreeting: () => {
        return "good morning";
    } // terdapat property sayGreeting dan valuenya adalah function yang mengembalikan value "good morning"
}
console.log(greeting.sayGreeting()); // cara pamaggilannya 
//____________________________________________________________________________________________________________
console.log("___________________________________________________________________________________________________")
// perbedaan antara arrow function dan function

const carBrand = {
    idustry : "car industry",
    brand1 : "Toyota",
    brand2 : "Honda",
    brand3 : "Mitsubishi",
    
   // cara membuat arrow function di dalam object
   // jika tanpa retrun bisa di tulis dalam 1 baris
    brand4 : () => "Nissan",

    // cara membuat function di dalam object
    brandCountry : function () {
        return `this is japanese ${this.idustry}`; // pada function kita dapat menggunakan this yaitu :
                                                   // this merujuk pada object carBrand yaitu property yang terdapat
                                                   // dalam object carBrand disini kita menggunakan property idustry
                                                   // dan valuenya adalah "car industry"
                                                   // maka jika this di hilangkan akan terjadi error
    },
};
console.log(carBrand.brandCountry()); // akan tampil : this is japanese car industry

// jika ingin menampilkan seluruh key dalam sebuah object
console.log(Object.keys(carBrand)); // akan tampil semua key dalam object carBrand
console.log("___________________________________________________________________________________________________")

// jika ingin menampilkan seluruh value dalam sebuah object
console.log(Object.values(carBrand)); // akan tampil semua value dalam object carBrand
console.log("___________________________________________________________________________________________________")

// Jika ingin melarang semua perubahan atau penambahan pada object
Object.freeze(carBrand);
carBrand.brand5 = "subaru";

console.log(carBrand); // maka proprty brand5 dengan value subaru tidak akan ditampilkan
console.log("___________________________________________________________________________________________________")
