//GLOBAL VARIABLES

const sketchNumber = "21";
const width = 1000;
const height = 1000;

function setup() {
  let cnv = createCanvas(width, height, WEBGL);
  cnv.position(50, 100, "scrolled");
  background(255);
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