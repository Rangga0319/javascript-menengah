// method adalah sebuah fungsi yang ada di dalam property dalam object
// dan juga bisa di terapkan dalam class

class Pengguna {                                      // membuat class Pengguna
    firstName = "";                                   // membuat property firstName
    lastName = "";                                    // membuat property lastName              
    username = "";                                    // membuat property username
    age = 0;                                          // membuat property age
    #password = "Kig78RTYU97i9jLfsg";                 // membuat private property #password

    constructor(ToFirstname, ToLastname, ToUsername, ToAge){         //  digunakan untuk membuat objek baru yaitu dengan 
                                                                      // mengisi atau mengatur nilai awal dari objek tersebut.

        this.firstName = ToFirstname;                   
        this.lastName = ToLastname
        this.username = ToUsername + " - password : " + this.#password;
        this.age = ToAge;

        // di atas ini this diindikasikan sebagai objek saat ini di dalam class Pengguna
        // yaitu firstName, lastName, username, dan age
        // constructor ini membungkus 4 parameter yaitu ToFirstname, ToLastname, ToUsername, dan ToAge

    }


    #getFullname(){                                                                // membuat private method getFullname
        return `${this.firstName} ${this.lastName}`;                               // untuk menampilkan property firstName
                                                                                   //  dan lastName
    }
    greeting(){                                                                   // membuat method greeting    
        return `Selamat Datang Kembali ${this.#getFullname()}`;                    // dan mengembalikan nilai 
    }                                                                             // dari method getFullname

    }

const user = new Pengguna("Alvina", "Ramadani", "Alvina08", 20);

    // membuat variabel user yang merupakan objek baru yang dimana objek tersebut di buat menggunakan class Pengguna
    // saat object tersebut di isi maka ke 4 parameter di dalam constructor akan di isi
    // firstName = "Alvina", lastName = "Ramadani", username = "Alvina08", dan age = 20
    // yang semua itu di simpan dalam parameter ToFirstname, ToLastname, ToUsername, dan ToAge

console.log(user.greeting()); 
                   // maka ketika di jalankan akan tampil : 
                   // Selamat Datang Kembali Alvina Ramadani