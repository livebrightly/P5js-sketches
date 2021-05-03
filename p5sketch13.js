const sketchNumber = "13";
const width = 1000;
const height = 1000;

function setup() {
  let cnv = createCanvas(width, height, WEBGL);
  cnv.position(100, 100, "fixed");
  // positions canvas each 100px down and to the right so that it no longer hugs the corner of the window

  //noCursor();
  background(255);
  translate(300, 20);

  //fill(0);
  //cone(400);
  createLoop({
    duration: 10,
    gif: true
  })
}

function draw() {
  // background( color('BLUE') );
  // lights();
  //image(img, mouseX, mouseY);
  rotateY(frameCount / 20);
  rotateX(frameCount / 300);
  rotateZ(frameCount / 300);

  //texture(img);
  // normalMaterial();
  // noFill();
  strokeWeight(2);
  cone(300);

  for (var i = 0; i < 8; i++) {
    translate(i * 0, i * 12);
    box(50);
    box(50);
  }
  fill(255);
  //noFill();
  stroke(176);
  strokeWeight(1)
  rectMode(CENTER);
}








function doubleClicked() {
  // toggle fullscreen
  var isfs = fullscreen();
  fullscreen(!isfs);
}

function keyPressed(savedEvent) {
  if (savedEvent.key == "s") {
    saveCanvas("P5 Explorations Day-" + sketchNumber, "gif");
  }
  num = keyCode;
}