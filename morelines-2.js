\\ Part a

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(width/2, height/2, random(width), random(height));
}

\\ Part b

function setup() {
  createCanvas(340, 340);
}

function draw() {
  line(random(width), random(height), width, 0);
}

\\ Part c

function setup() {
  createCanvas(340, 340);
}

function draw() {
  var xfirst = random(width);
  var yfirst = random(height);
  var xsecond = random(width);
  var ysecond = -2*(xsecond - xfirst) + yfirst;
  line(xfirst, yfirst, xsecond, ysecond);
}

\\ Part d
