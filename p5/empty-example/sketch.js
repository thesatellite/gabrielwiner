function setup() {
  createCanvas(windowWidth,windowHeight);
  background(250);
}

function draw() {
  stroke(20);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
