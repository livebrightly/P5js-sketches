const sketchNumber = "13";
const width = 1000;
const height = 1000;

let a = 0.0;
let s = 0.0;

function setup() {
  let cnv = createCanvas(width, height, WEBGL);
  cnv.position(100, 100, "fixed");
  // positions canvas each 100px down and to the right so that it no longer hugs the corner of the window

  noCursor();
  background(255);
  translate(300, 20);

  //fill(0);
  //cone(400);
}

function draw() {
  //background(255);

  //Slowly increase 'a' and then animate 's' with
  //a smooth cyclical motion by finding the cosine of 'a'
  a = a + 0.004;
  s = sin(a) * 2;


 for (let i = 0; i < 8; i++) {
translate(i * 2, i * 12);

  translate(width / 7, height / 1);
  scale(s);

  strokeWeight(2);
  cone(200);


  rotateY(frameCount / 20);
  //    rotateX(frameCount / 300);
  //   rotateZ(frameCount / 300);

  //texture(img);
  // normalMaterial();
  // noFill();

  for (let i = 0; i < 8; i++) {
    translate(i * 2, i * 12);
  translate(180, 45);
  fill(255);
  scale(s);
  box(50);
  box(50);
 }

}
  fill(0);
  //noFill();
  strokeWeight(1)
  stroke(0);
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