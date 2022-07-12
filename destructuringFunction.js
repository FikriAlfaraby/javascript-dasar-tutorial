/* 
untuk mempersingkat penulisan pengambalian value object atau array
dalam hal ini object (.identifier) dan Array ([index])
*/

//object 
let kalkulusObject = (a,b) => {
  return {
    jumlah : a+b,
    kali: a*b
  };
}
let {jumlah,kali} = kalkulusObject(5,3)
console.log(jumlah)
console.log(kali)
//array
let kalkulusArray = (a,b) => {
  return [a+b, a*b]
}

let [jumlahArray,kaliArray] = kalkulusArray(5,3)
console.log(jumlahArray)
console.log(kaliArray)


// Argument Parameter Object
let mahasiswa = {
  nama:"aby",
  alamat: "Mojokerto"
}

let cetak = ({nama,alamat}) => {
  return nama + alamat
}
console.log(cetak(mahasiswa));
// Argument Parameter Array

let mahasiswaArray = ["iqbal" , "Mojokerto"]

let cetakArray = ([nama,alamat]) => {
 return nama + alamat
}

console.log(cetakArray(mahasiswaArray));