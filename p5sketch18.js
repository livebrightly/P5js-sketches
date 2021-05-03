var offscreen;
var boxPositions = [];

const width = 1000;
const height = 1000;

function setup() {
  let cnv = createCanvas(width, height,WEBGL);
  cnv.position(50, 100, "scrolled");
  background(255);

/* } */

/* function setup() {
    createCanvas(1280, 720, WEBGL); */
    offscreen = createGraphics(400, 400);

    for (var i = 0; i < 50; i++) {
        boxPositions[i] = {
            x: random(-200, 200),
            y: random(-200, 200),
            z: random(-200, 200),
            rx: random(30, 40),
            rz: random(30, 50)
        }
    }
console.log(boxPositions);
}

function draw() {
    background(120);

    orbitControl();
    offscreenDrawing();
    // image(offscreen, 0, 0);
    // image(offscreen,mouseX, mouseY);
    rotate(frameCount / 200)
    drawBoxes();

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

function drawBoxes() {

    for (var i = 0; i < boxPositions.length; i++) {
        push();
        //translate(random(-100,100),random(-100,100),random(-100,100))
        translate(boxPositions[i].x, boxPositions[i].y, boxPositions[i].z, boxPositions[i].rx, boxPositions[i].rz);
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

  

  