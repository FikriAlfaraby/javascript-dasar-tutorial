//global variable
let name = "aby";

function firstName(differentName) {
  //local scope
  let first = "fikri";
  //local scope bisa mengakses global scope
  name = "alfarabyyy"

  return console.info(name);
}

function lastName() {
  //local Scope
  let last = "alfaraby";
}
firstName("abyyyyyy")
lastName()
// error karena mengkses local variable dalam scope global
// console.info(first)

//bisa karena ini global variable