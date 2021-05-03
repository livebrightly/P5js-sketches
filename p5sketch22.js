/* parts of code referenced from Coding Train
18.3: Light and Material - WebGL and p5.js Tutorial
18.4: Texture - WebGL and p5.js Tutorial
https://www.youtube.com/watch?v=k2FguXvqp60
https://www.youtube.com/watch?v=O1mYw-3Wl_Q
 
*codingtrain
*/




//GLOBAL VARIABLES
const sketchNumber = "22";
const width = 1000;
const height = 1000;

let angle = 0;
let textletterY;

function setup() {
  let cnv = createCanvas(width, height, WEBGL);
  cnv.position(50, 100, "fixed");

  graphics = createGraphics(200, 200);
  graphics.background(255);
  //*codingtrain

  textletterY = createGraphics(100, 100);
  textletterY.background(0, 0, 0, 100);
  textletterY.fill(255, 0, 255, 100);
  textletterY.stroke(255, 0, 255, 150);
  textletterY.strokeWeight(15);
  textletterY.textSize(98);

  textletterY.textSize(100);
  textletterY.textAlign(CENTER);
  textletterY.text('Y YY', 110, 100);


}

function draw() {
  background(0);



  // pointlight(v1,v2,v3,x,y,z)

    pointLight(0,0,255,0,-200,0);
    pointLight(255,0,0,-200,0,0);

  ambientLight(200);



  directionalLight(255, 0, 255, 1, 0, 1);
  directionalLight(255, 255, 255, 0, 0, 1);
  //*codingtrain


  push();

  /*   https://www.geeksforgeeks.org/p5-js-texturewrap-method/
    textureWrap(wrapX, [wrapY]);
    parameters for wrapX, wrapY:  
      The CLAMP mode causes the pixels at the edge of the texture to extend to its limit. This is the default behavior.
      The REPEAT mode causes the texture to tile on repeat until it reaches the limit. 
      The MIRROR mode works similarly to REPEAT, but it inverts the texture on every new tile. 
      
    */
  
  
      //specularMaterial(100, 255, 0, 40);

  
  textureWrap(CLAMP,MIRROR);
  texture(textletterY);


  rotateX(angle*2);
  rotateY(angle * 0.03);
  rotateZ(angle * 0.7);
  
  box(100);
  pop();

  angle += 0.03;

/*   translate(0, 200);
  //rotateX(HALF_PI / 3);
  noStroke();

  directionalLight(100, 255, 1, 0, 1, 0);

  //ambientLight(100, 255, 0, 40);
ambientMaterial(30);
  plane(885, 885); */

  //*codingtrain for plane as ground elt



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