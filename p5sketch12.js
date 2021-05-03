//GLOBAL VARIABLES

const sketchNumber = "12";
//const width = 1000;
//const height = 1000;

let w;

function setup() {
  createCanvas(1000, 1000);
  w = new Walker();
  rectMode(CENTER);
  backgound(255)
  fill(0);
}



function draw() {

  w.display();


}

function Walker() {
  this.x = width / 2;
  this.y = height / 2;

  this.display = function(){
    rect(this.x, this.y, 10,10)
  }
}


this.step = function(){
  stepDirection = Math.random(4)
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