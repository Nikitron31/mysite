//
// let x = "true"
//
// alert(x);
// alert( `hello ${1}` ); // ?

// let a = "str";
// let b = 8;
// let result = a + b;
//
// if (typeof result == "string"){
// alert("One of the data is string, so the whole expression has became a string: " + result);
// }
// else {
// alert("Undefined data type");
// }
"use strict";

let is = confirm("На ваш компьютер загружается вирус!");

if (is ==  true) {
  alert("Удаляем...");
}
if (is == false) {
  alert("Вирус успешно загружен!");
}
