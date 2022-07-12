let mahasiswa = [1, 2, 3, 4, 5];
let mahasiswa2 = [2, 2, 3, 4, 5];
let reduce = (array) => {
  return array.reduce((a, b) => a + b);
};
let jumlahHuruf = reduce(mahasiswa);
let jumlahHuruf2 = reduce(mahasiswa2);
