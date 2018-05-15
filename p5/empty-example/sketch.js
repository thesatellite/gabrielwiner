function setup() {
  createCanvas(710, 400);
  background(250);
}

function draw() {
  stroke(20);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
