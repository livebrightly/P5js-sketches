/* reference:  Zhang Weidi
P5.js Tutorial | Create a generative art using image data
https://www.youtube.com/watch?v=me04ZrTJqWA


*CATut: 

 */

//GLOBAL VARIABLES



const sketchNumber = "05";
const width = 1000;
const height = 1000;


let imgText;


function preload() {
  //imgText = loadImage('../P5jsDailySketches/assets/BickhamScrptimg.png');
  imgText = loadImage('../P5jsDailySketches/assets/kitten.jpg');
}

function setup() {
  let cnv = createCanvas(width, height);

  //print(imgText.width,imgText.height);

  //*CATut: center the canvas to the screen
  let newCanvasX =(windowWidth-width/2 -imgText.width)/2
  let newCanvasY =(windowHeight*2 -imgText.height)/2

  cnv.position(newCanvasX, newCanvasY, "fixed");

 // cnv.position(50, 100, "scrolled");
    background(255);


/*     imageMode(CENTER)
    image(imgText, 500, 700); */

  //*CATut: access the pixel information of the image 
  for (let col = 0; col < imgText.width; col++) {
    for (let row = 0; row < imgText.height; row++) {


      let c = imgText.get(col, row);
      stroke(color(c));
      point(col, row);
 
    }}
  
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