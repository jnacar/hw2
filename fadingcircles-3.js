// Assignment

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(200,270), random(50,80), 80);
  ellipse(random(width), random(height), random(40, 80));
}

// Creative Challenge

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(200,270), random(50,80), 80);
  beginShape(TRIANGLE_FAN);
 	vertex(random(width), random(height));
	vertex(random(width), random(height));
	vertex(random(width), random(height));
	vertex(random(width), random(height));
	vertex(random(width), random(height));
	vertex(random(width), random(height));
  endShape();
}
