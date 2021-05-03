//GLOBAL VARIABLES

const sketchNumber = "04";
const width = 1000;
const height = 1000;

let imgText;




function preload() {
  imgText = loadImage('../P5jsDailySketches/assets/AcuminVarConceptimg.png');
}

function setup() {
  let cnv = createCanvas(width, height);
  cnv.position(50, 100, "fixed");
  background(255);
   fill(0);

}
 function draw (){
   imageMode (CENTER);
   image(imgText,500,550);

   

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