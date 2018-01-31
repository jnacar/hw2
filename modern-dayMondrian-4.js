// Assignment 1

createCanvas(340, 340);
background(255, 255, 255);
colorMode(RGB);
strokeWeight(20);
stroke(0,0,0);
rect(0, 0, 340, 340);

strokeWeight(10);
fill(255, 255, 0);
rect(6, 6, width/2, width/2)

fill(0, 0, 0);
rect(width/2+6, 6, 166, width/4)

fill(0, 0, 255);
rect(width/2+6, width/4+6, 160, width/4)

fill(255, 0, 0);
rect(width/2+6, width/2+6, width/2-12, width/2-12)

line(0, 255, width/2+6, 255);


// Assignment 2

createCanvas(340, 340);
background(255, 255, 255);
colorMode(RGB);
strokeWeight(20);
stroke(0,0,0);
rect(0, 0, 340, 340);

strokeWeight(10);
fill(random(255), random(255), random(255));
rect(6, 6, width/2, width/2)

fill(random(255), random(255), random(255));
rect(width/2+6, 6, 166, width/4)

fill(random(255), random(255), random(255));
rect(width/2+6, width/4+6, 160, width/4)

fill(random(255), random(255), random(255));
rect(width/2+6, width/2+6, width/2-12, width/2-12)

line(0, 255, width/2+6, 255);


// Super-bonus Challenge

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
