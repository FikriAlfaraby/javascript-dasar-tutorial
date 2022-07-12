let name = "aby";

function giveName(callback) {
  callback("aku aby")
}

let say = function(name) {
  document.writeln(`<p> halo ${name} </p>`);
}


giveName(say);
