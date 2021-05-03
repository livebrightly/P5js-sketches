//GLOBAL VARIABLES

// Coding Challenge #86: Cube Wave by Bees and Bombs
//http://127.0.0.1:5500/P5jsDailySketches/sketch23.html

//let kitten;
let angle = 0;
let w = 24;

/* function preload() {
  kitten = loadImage('../P5jsDailySketches/assets/kitten.jpg');
}
 */
const sketchNumber = "21";
//const width = 1000;
//const height = 1000;

function setup() {
  createCanvas(1000, 1000, WEBGL);
  //let cnv = createCanvas(width, height, WEBGL);
  //cnv.position(50, 100, "scrolled");
  pixelDensity(1);
  background(0);
}


function draw() {
  blendMode(SUBTRACT);

ortho();
directionalLight(255,255,255,0,-1,0)

  translate(-20,-20,-50);
  //rotateX(-8);
  //rotateY(-PI/2);
  //rotateZ(-PI/2);
  //translate(width / 2, height / 2);
  rectMode(CENTER);

rotateX(angle * 0.25);

  let offset = 0;


  for (let y = 0; y < height; y += w) {

  for (let x = 0; x < 10; x += w) {

    push();
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 40);
    translate(x - width / 5, y-height/5, 0);
    normalMaterial(255) 


//texture(kitten)   

    cone(w-2,h*2,w-2);
    fill(0);
    translate(0,50);
    box(w-2,h*2,w-2);
    //rect(x - width / 2 +w/2, 0, w-2, h);
    offset += 0.1;
    pop();
  }}


  angle += 0.009;
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