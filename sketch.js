// let mySound;
let mySound;
let amp;
let img;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Trippy Audio .mp3');
  img = loadImage('lips2.png');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  mySound.setVolume(0.1);
  mySound.loop();
  
  // create a new Amplitude analyzer
  amp = new p5.Amplitude();

  // Patch the input to an volume analyzer
  amp.setInput(mySound);
}


function draw() { 
  background(255);
 	var rms = amp.getLevel();
  
  // eyeballs
  fill(0, 0, 255);
  stroke(0);
  ellipse(80, 30, 10+rms*200, 10+rms*200);
  ellipse(-80, 30, 10+rms*200, 10+rms*200);
  
  //eyes
  fill(0);
  translate(90, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(60, 20);
  pop();
  
  translate(-180, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(60, 20);
  pop();
  
  //lips
  fill(100, 230, 100);
	translate(80, 200, 20);

  // noFill();
  fill(0,0);
  texture(img);
	plane(90, 90);

  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(100, 80, 80);
  pointLight(200, 200, 200, locX, locY, 0);
  
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(200, 200);
}


