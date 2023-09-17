const box = document.getElementById("box");
const container = document.getElementsByClassName("container")[0];
let x = 0;
let y = 0;
let speed = 50;
document.addEventListener("keydown", (e) => {
  console.log(x, y);
  if (e.key == "ArrowUp") {
    if (y > 0) {
      y -= speed;
      box.style.transform = `translate(${x}px,${y}px)`;
    }
  }
  if (e.key == "ArrowLeft") {
    if (x > 0) {
      x -= speed;
      box.style.transform = `translate(${x}px,${y}px)`;
    }
  }
  if (e.key == "ArrowRight") {
    if (x < container.clientWidth - 50) {
      x += speed;
      box.style.transform = `translate(${x}px,${y}px)`;
    } else {
      box.style.transform = `translate(${container.clientWidth - 50}px,${y}px)`;
    }
  }
  if (e.key == "ArrowDown") {
    if (y < container.clientHeight - 50) {
      y += speed;
      box.style.transform = `translate(${x}px,${y}px)`;
    } else {
      box.style.transform = `translate(${x}px,${container.clientHeight - 50}px)`;
    }
  }
});
