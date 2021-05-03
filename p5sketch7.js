//GLOBAL VARIABLES

const sketchNumber = "07";
const width = 1000;
const height = 1000;


let imgText;


function preload() {
  imgText = loadImage('../P5jsDailySketches/assets/CarlMarximg.png');
}

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
  