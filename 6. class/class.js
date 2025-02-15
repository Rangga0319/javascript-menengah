// dengan kata lain bisa diseut cetakan untuk object atau array
// dan pada umunya membuat class menggunakan pascal sace yaitu awalan huruf besar

// perbedaanya dengan object seperti berikut
console.log("_______________________________________ INI ADALAH CONTOH OBJECT _________________________________________");

const user0 = {
    username : "Alvina",
    password : "6789",
};

const user1 = {
    username : "Pratama",
    password : "9987",
};

const user2 = {
    username : "Randa",
    password : "4321",
};

console.log(user0);         
console.log(user1);          
console.log(user2);          

// tanpa ada class membuat object akan lebih sulit dan sangat tidak efektif
// dikarenakan harus membuat object satu per satu beserta property dan value nya


console.log("_______________________________________ INI ADALAH CONTOH CLASS _________________________________________");

class User {                 // membuat class dengan nama User
    username = "";           // memmbuat 2 property yaitu username dan password
    password = 0 ;           // kedua property tersebut akan diisi dengan string dan number
    #gender = "male / female";            // itu makanya value dari property tersebut  tidak di isi / undefined
                             // dan membuat property tersebut menjadi optional tidak wajib
                             // dan jika property tersebut tidak dibuat maka tidak masalah

                             // property gender menggunakan # di depannya artinya property ini hanya bisa diakses 
                             // oleh object / class ini saja dan tidak bisa diakses oleh object di luarnya
                             // digunakan untuk menyembunyikan property biasanya berisi data sensitif 

    constructor(InputUsername, InputPassword){   
        // membuat constructor ini seperti function yang menerima beberapa parameter
        // dan jika nanti obcject di panggil maka juga akan memanggil constructor
        
        this.username = InputUsername + " " + this.#gender;  // begini cara menampilkan property gender tersebut
                                                             // menggunakan this. dan ini masih dalam lingkup constructor
                                                             // yang dimana constructor di dalam sebuah object / class
                                                             // tempat property gender tersebut terisi    
        
                                                 // lalu membuat this. this ini merujuk ke object saat ini
                                                 // dalam class User yaitu username dan password 
        this.password = InputPassword;           // memgapa penting menggunakan this ? kerena jika tidak menggunakan this
                                                 // maka saat di panggil akan terjadi error
                                                 // jadi jika ingin mengakses property dalam object di dalam class
                                                 // maka harus menggunakan this
                                                 // disini this merujuk ke object saat ini yaitu username dan password
                                                 // disimpan dalam parameter InputUsername dan InputPassword
    } 
}

const user = new User("Alvina", 6789);     
const userA = new User("Pratama", 9987);
const userB = new User("Randa", 4321);
// dan sangat efektif membuat banyak object dengan menggunakan class
// karena class udah menjadi cetakan object tanpa membuat object satu per satu jika menyimpan banyak data dalam object

console.log(user);      // akan tampil : User { username: 'Alvina', password: 6789 }
console.log(userA);     // akan tampil : User { username: 'Pratama', password: 9987 }              
console.log(userB);     // akan tampil : User { username: 'Randa', password: 4321 }

