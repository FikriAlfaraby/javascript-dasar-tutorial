let jenisAngka ={
  positif: {
    angka1: 12,
    angka2:13,
    angka3:15
  } ,
  negatif:{
    angka1: -12,
    angka2: -10,
    angka3: -15
  },
  desimal:12.5
}

let LingkunganRumah = {
  keluargaAby:{
    ayah: null,
    ibu: null,
  },

}

let arrays = ["aby", "Budi"];
let [namaDepan,namaBelakang]= arrays ;
console.info(namaDepan,namaBelakang);



// attribute akan diinisalisasi javascript dengan teks code nameAttribute: value 
 
// distructuring defaut value, apabila attribute tidak ada
let func = (a) => {
  return console.log(a)
}
function orang(name,ayang) {
  console.info("Ayang " + name + " adalah " + ayang)
}
orang("Aby" , "Imel")
let { keluargaAby, keluargaFikri = "sukiyem" , keluargaSukiman = {ayah : "halo"} } = LingkunganRumah
func(keluargaFikri)
console.info(keluargaSukiman.ayah)


//spredd operator 
let { positif, ...others} = jenisAngka;
console.info(positif,others);


// funtion parameter distruction , mengisi parameter dengan variable distructuring
let display = (sapa, nama) => {
   console.info(sapa + nama);
}

const sapaann = {
  sapa: "halo",
  nama: "aby"
}
const {sapa:sapaan ,nama:namaa} = sapaann

display(sapaan, namaa)

// menimpa attrivute dengna variable menggunakan destructuring array
let person = {
  firstName: "Muhammad",
  middleName: "Fikri",
  lastName: "Alfaraby"
}

let {firstName: firstNameOrang, middleName: middleNameOrang, lastName: lastNameOrang} = person

console.info(firstNameOrang)
//array 

let array = [1,2,3,4,5]

let [angka1,angka2,angka3,angka4,angka5] = array

console.info(angka1+angka2)


let hitung2 = ([angka1, angka2]) => {
  console.info(angka1+ angka2)
}


hitung2([2,3])