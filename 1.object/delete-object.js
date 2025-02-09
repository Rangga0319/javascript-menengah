// lanjutan dari file object yaitu menghapus property / key dari object

const Foods = {
    rice : "nasi goreng",
    seaFood : "ikan bakar",
    meat : "dendeng balado",
    chicken : "ayam kecombrang",
}
// object Foods memiliki 4 property yaitu rice, seaFood, meat, chicken
console.log(Foods); // akan tampil : 
// { rice: 'nasi goreng', seaFood: 'ikan bakar', meat: 'dendeng balado', chicken: 'ayam kecombrang' }

delete Foods.rice; // maka kita menghapus property rice dari object Foods
console.log(Foods); // akan tampil :
// { seaFood: 'ikan bakar', meat: 'dendeng balado', chicken: 'ayam kecombrang' } // proprty rice sudah di hapus