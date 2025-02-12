const FavFood = { // membuat object FavFood dengan property dessert dan main
    dessert : "puding",
    main : "yakiniku",
};
console.log(FavFood); // akan tampil : { dessert: 'puding', main: 'yakiniku' }


const FavDrink = { //membuat object FavDrink dengan property drink
    drink : "milktea",
    ...FavFood, // menggunakan spread operator untuk mengambil property dessert dan main dari FavFood
};

FavFood.dessert = "ice cream"; // dan jika ingin mengubah properti dari object yang telah di panggil 
                               // menggunakan spread operator maka hasilnya pun saat di panggil nanti tidak akan berubah
                               // dan ini berlaku untuk perubahan apapun di dalam object FavFood

console.log(FavDrink); // akan tampil : { drink: 'milktea', dessert: 'puding', main: 'yakiniku' }
                       // karena ... tiga titik ini mengambil semua property dari object FavFood
                       // dan property tersebut tergabung kedalam object FavDrink 
                       // dengan kata lain kurung kurawal object FavFood di buka lalu di gabungkan dengan obcet FavDrink
                       // karena disini menggunakan ... dalam object FavDrink yang memanggil object FavFood


console.log("___________________________________________________________________________________________________");

// ini juga berlaku untuk array
// contoh :

const numbers = [1, 2, 3, 4, 5];

const newNumbers = [...numbers]; // menggunakan spread operator untuk mengambil semua value dari array numbers
console.log(newNumbers); // akan tampil : [ 1, 2, 3, 4, 5 ]  // newNumbers membuat array baru 
                         // yang mengambil semua value dari array numbers

console.log("___________________________________________________________________________________________________");

// juga berlaku untuk mengconcat 2 bahkan lebih array menggunakan spread operator
const numbers2 = [1, 2, 3, 4, 5];
const alfabet = ["a", "b", "c", "d", "e"];

const new_num_alfa = [...numbers2, ...alfabet]; // menggunakan spread operator untuk mengambil semua value dari 
                                                // array numbers2 dan alfabet

console.log(new_num_alfa); // akan tampil : [ 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e' ] 
                           // kedua array tersebut tergabung kedalam array new_num_alfa

// dan meskipun array numbers2 dan alfabet di manipulasi valuenya maka array new_num_alfa tidak akan berubah sama sekali