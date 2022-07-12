// let fullName = (firstName, middleName, lastName) => {
//   let fullName = firstName + lastName + lastName
  
//   return fullName;
// }

// console.info(fullName("Muhammad ", " Fikri" , " Alfaraby"))

let tambahAngka = (...angkaas) => {
   debugger;
   let total = 0;
   for (const angkaaa of angkaas) {
     total += angkaaa
   }
   return total
}

console.info(tambahAngka(1,2,3,4,5))
