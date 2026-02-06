let input = document.querySelector("input");

function calc(x) {
  input.value = input.value + x;
}
function oper() {
  input.value = (input.value) * -1;
}
function byx() {
  input.value = 1 / (input.value);
}
function pow() {
  input.value = Math.pow((input.value), 2);
}
function sqr() {
  input.value = Math.sqrt(input.value);
}
function clr() {
  input.value = "";
}
function del() {
  input.value = input.value.slice(0, -1);
}
function equal() {
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Error";
  }
}
