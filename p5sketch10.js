//GLOBAL VARIABLES

const sketchNumber = "10";
const width = 1000;
const height = 1000;


let imgText = [];


function preload() {
  for (var i = 0; i < 3; i++){
    imgText[i] =loadImage('../P5jsDailySketches/assets/robotoMonoimg' + i + '.png');

  imgText[0] = loadImage('../P5jsDailySketches/assets/robotoMonoimg0.png');
  imgText[1] = loadImage('../P5jsDailySketches/assets/robotoMonoimg1.png');
  imgText[2] = loadImage('../P5jsDailySketches/assets/robotoMonoimg2.png');
}}

function setup() {
  let cnv = createCanvas(width, height);
  cnv.position(50, 100, "scrolled");
  background(255);
}
 function draw (){
   background(255);
   imageMode (CENTER);
   image(imgText,500,500);
 }



    //tint(255, 126); // Apply transparency without changing color







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
  