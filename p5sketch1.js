//GLOBAL VARIABLES

const sketchNumber = "01";
const width = 1000;
const height = 1000;


function setup() {
  let cnv = createCanvas(width, height);
  cnv.position(50, 100, "fixed");
  background(255);

}


function draw() {
  background(255);
  translate(400, height/2);
  noStroke();
  fill(0);
  scale(3);
  
  beginShape(QUADS);
vertex(30, 20);
vertex(55, 20);
vertex(55, 95);
vertex(30, 95);
endShape();
 
  
  translate(2,-90);
  beginShape(QUADS);
vertex(65, 20);
vertex(90, 20);
vertex(60, 95);
vertex(35, 95);
endShape();
  
translate(-42,-0);
 beginShape(QUADS);
vertex(72, 70);
vertex(45, 20);
vertex(20, 20);
vertex(60, 96);
endShape();

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