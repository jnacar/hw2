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

function setup() {
  createCanvas(340, 340);
}

function draw() {
  var xfirst = random(width);
  var yfirst = random(height);
  var xsecond = random(width);
  var ysecond = random(height);
  var lineLength = Math.sqrt(Math.pow(xsecond - xfirst, 2) + Math.pow(ysecond - yfirst, 2));
  if (lineLength < 120) {
    stroke('red');
  }
  else if (lineLength < 240) {
    stroke('yellow');
  }
  else if (lineLength < 360) {
    stroke('blue');
  }
  else {
    stroke('black');
  }
  
  line(xfirst, yfirst, xsecond, ysecond);
}
