function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  fill(250, 200, 200, 50);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
  //rectangle
  // fill(200, 250, 200);
  // rect(400, 100, 50, 50);
}

function mousePressed() {
  background(250);
}
