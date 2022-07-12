function sortir(keterangan_umur) {

    function fullname(firstname,lastname) {
        console.info(keterangan_umur + ": \n" + firstname + " " + lastname) 
    }
    return fullname
}

let umur20 = sortir("Orang berumur 20 ke atas")
umur20("Fikri" ,"Alfaraby")

let umur18 = sortir("Orang berumur 18 ke atas ");


let umur19 = sortir("Orang berumur 19 ke atas ")


umur18("Muhammad", "iqbal");
umur18("Melvina" , "Mufida")
umur19("muhammad kafanal" , "kafi")

function createTambah(valueTambah) {

    function angkaTambah(angka) {
      console.info("Value " + angka + " akan bertambah "  + valueTambah + " sehinggga menjadi : ");
      return angka + valueTambah; 
    }
    return angkaTambah
}

let percobaan1 = createTambah(20)

console.info(percobaan1(200))
console.info(percobaan1(300))

 let percobaan2 = createTambah(100)
 console.info(percobaan2(100))

let createPengurangan = (angka_pengurangan) => {
    let angka = (angkanya) => {
        console.info(
            "Angka " + angkanya + " Akan dikurangi dengan " + angka_pengurangan + "Sehingga Menjadi ");
        return angkanya - angka_pengurangan
    }
    return angka
}

let number1 = createPengurangan(20);
console.info(number1(200))