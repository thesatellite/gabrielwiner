function setup() {
 	createCanvas(windowWidth, windowHeight);
	strokeWeight(10)
	stroke(0);
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}
