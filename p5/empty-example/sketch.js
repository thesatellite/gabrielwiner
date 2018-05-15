
function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  stroke(0);
  background(255);
}

function touchMoved(){
   line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function touchEnded(){
  return false;
}
