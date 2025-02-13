// yaitu mengekstrak property dari sebuah object atau array

const cadidate = { //  membuat object dengan nama cadidate yang berisi property berikut : 
    name : "Priscilla",
    age : 20,
    gender : "female",
    kingdom : "volacia empire",
}

// jika ingin mengakses property name dari object cadidate
console.log(`name : ${cadidate.name} kingdom : ${cadidate.kingdom}`);

console.log("___________________________________________________________________________________________________");

// maka harus memanggil nama object untuk mengakses property-propertynya maka agar simpel
// menggunakan destructuring
const {name, kingdom} = cadidate; // dalam tanda kurung kurawal ini bisa mengakses semua property dari sebuah object
                                  // property yang di tulisa harus sama dengan property di dalam object

console.log(`name : ${name} kingdom : ${kingdom}`); 
// hasil yang tampil akan sama dengan penulisan yang lebih ringkas

console.log("___________________________________________________________________________________________________");

// dapat juga digunakan pada array
const theStrongres = ['satella', 'rainhard', 'regulus', 'puck', 'ram'];
console.log(theStrongres[1]); // akan tampil : rainhard
                              // cara pemanggilan value array secara umum

// atau di simpan kembali dalam sebuah variabel
const topFive = theStrongres[1]; 
const topFive2 = theStrongres[2];

console.log(topFive);        // tetap akan tampil rainhard
console.log(topFive2);       // tetap akan tampil regulus

console.log("___________________________________________________________________________________________________");
// berikut jika menggunakan destructuring
// jika pada object harus menulis dengan persis property sebuah object di dalam kurung kurawal
// maka pada array menggunakan destructuring memanggilnya dengan index
// jadi tidak masalah jika ingin membuat variabel dengan nama yang berbeda dengan value di dalam array tersebut

const [first, second] = theStrongres; 
console.log(first, second);
// jadi variabel first adalah index 0 atau value pertama dalam array theStrongres yang mana isinya satella
// dan satella pada array theStrongres memiliki index 0
// dan variabel second adalah index 1 dan index 1 pada theStrongres memiliki value rainhard
// maka akan tampil satella yang tersimpan dalam first dan rainhard yang tersimpan dalam second

const [third, fourth,] = theStrongres; 
console.log(third, fourth,);
// dan jika variabel dengan nama lain dibuat disini hanya membuat 2 variabel
// yang akan tampil satella mewakili third dan rainhard mewakili fourth, mengapa ?
// karena array theStrongres index 0 = satella dan index 1 = rainhard
// jadi meski nama varibelnya berbeda namun hanya terdapat 2 variabel 
// yang mana hanya index 0 sebagai third dan index 1 sebagai fourth
// tetap akan tampil satella mewakili third dan rainhard mewakili fourth
// kecuali membuat 3 variabel dimana varibel ke 3 adalah index 2 
// maka yang muncul adalah index 2 dari theStrongres yaitu regulus

console.log("___________________________________________________________________________________________________");

// dapat juga menggunakan spread operator karena spread operator bisa mengambil semua value dari array
// jadi jika ingin mengambil value array sekaligus atau sisa dari array tersebut
// maka menggunakan spread operator

const theStrongres2 = ['satella', 'rainhard', 'regulus', 'puck', 'ram']; // ini arraynya
console.log(theStrongres2)  // akan tampil : [ 'satella', 'rainhard', 'regulus', 'puck', 'ram' ]

const [first2,...rest] = theStrongres2; // ini variabelnya dengan destructuring
                                                  // di dalamnya ...rest adalah spread operator
                                                  // dimana rest adalah sisa dari variabel theStrongres2                                       

console.log(first2); // untuk menampil satella 
                   // karena satella telah tersimpan dalam first2 sebagai index 0 kerena dalam theStrongres2
                   // satella memiliki index 0

console.log(rest); // maka akan tampil [ raindhard, regulus, puck, ram ] sisa dari array theStrongres2
                   // semua value tersebut telah tersimpan dalam variabel rest


