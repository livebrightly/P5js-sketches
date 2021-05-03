var offscreen;
var shapePositions = [];


/* const width = 1000;
const height = 1000;

function setup() {
  let cnv = createCanvas(width, height);
  cnv.position(50, 100, "scrolled");
  background(255);
}
 */

function draw() {
    background(120);

    orbitControl();
    offscreenDrawing();
    // image(offscreen, 0, 0);
    // image(offscreen,mouseX, mouseY);
    rotate(frameCount / 200)
    drawShapes();

}


function offscreenDrawing() {
    background(0);
    // offscreen.background(0, 100);
    // offscreen.background(0, map(mouseX, width, 0, 255));
    offscreen.background(0, abs(sin(frameCount / 100)) * 255);
    for (var i = 0; i < 100; i++) {
        offscreen.rect(random(width), random(height), 10, 10);
    }
}

function drawShapes() {

    for (var i = 0; i < shapePositions.length; i++) {
        push();
        //translate(random(-100,100),random(-100,100),random(-100,100))
        translate(shapePositions[i].x, shapePositions[i].y, shapePositions[i].z, shapePositions[i].rx, shapePositions[i].rz);
        texture(offscreen);
        rotateX(frameCount / 20);
        rotateY(frameCount / 20);
        torus(50);
        //box(50);
        pop();
    }
}




function keyPressed(savedEvent) {
    if (savedEvent.key == "s") {
      saveCanvas("P5 Explorations Day-" + sketchNumber, "gif");
    }
    num = keyCode;
  }
  