function recursiveFunction(value) {
  if (value === 1) {  
    return 1;
  } else {
    return value *= recursiveFunction(value - 1)
  }
   
}
console.info(recursiveFunction(5))
