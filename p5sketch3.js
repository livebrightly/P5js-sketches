//GLOBAL VARIABLES

const sketchNumber = "03";
const width = 1000;
const height = 1000;
let Yshape;


function setup() {
  let cnv = createCanvas(width, height);
  cnv.position(50, 100, "fixed");
  background(255);
}


function draw() {
  background(0);
  translate(400, height / 2);
  scale(3);

  for (let Yshape = 0; Yshape < 10; Yshape+=30) {
    translate(50, 0)

    for (let i = 0; i < 10; i++ /2) {
      scale(0.6,03)

      fill(255, 100);
      strokeWeight(3);
      stroke(0, 255);

      //bottom
      beginShape(QUADS);
      vertex(30, 20);
      vertex(55, 20);
      vertex(55, 95);
      vertex(30, 95);
      endShape();

      //left
      translate(2, -90);
      beginShape(QUADS);
      vertex(65, 20);
      vertex(90, 20);
      vertex(60, 95);
      vertex(35, 95);
      endShape();

      //right
      translate(-42, -0);
      beginShape(QUADS);
      vertex(72, 70);
      vertex(45, 20);
      vertex(20, 20);
      vertex(60, 96);
      endShape();

    }
  }

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