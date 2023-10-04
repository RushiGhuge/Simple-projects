function call() {
  let p = document.getElementById("investment").value;
  let r = document.getElementById("returnRate").value;
  let t = document.getElementById("years").value;
  let m = 1;

  console.log(p * (1 + r)/m);
}
