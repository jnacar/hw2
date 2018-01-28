createCanvas(340, 340);
background(255, 255, 255);
colorMode(RGB);
strokeWeight(4);
stroke(0,0,0);
rect(0, 0, 340, 340); 

var xcoord = 0;
var ycoord = 0;
var rwidth = 0;
var rheight = 0;
var items = [45, 85];
while (ycoord < height) {
  strokeWeight(4);
  stroke(0,0,0);
  
  while (xcoord < width) {
    rwidth = items[Math.floor(Math.random()*items.length)] ;
  	rheight = items[Math.floor(Math.random()*items.length)] ;
  	if ((width - xcoord) <= 80) {
      fill(random(255), random(255), random(255));
    	rect(xcoord, ycoord, width - xcoord, rheight);
    	xcoord = width;
  	}
  	else {
      fill(random(255), random(255), random(255));
  		rect(xcoord, ycoord, rwidth, rheight);
  		xcoord = xcoord + rwidth;
  	}
  }
  ycoord = ycoord + 85;
  xcoord = 0;
}
