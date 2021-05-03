

function offscreenDrawing() {
    background(255);
    // offscreen.background(0, 100);
    // offscreen.background(0, map(mouseX, width, 0, 255));
    offscreen.background(0, abs(sin(frameCount / 100)) * 255);
    for (let i = 0; i < 100; i++) {
        offscreen.rect(random(width), random(height), 10, 10);
    }
}

function drawShapes() {
    for (shapePositions of shapePositions) { //generics form of the for loop
        //for (let i = 0; i < shapePositions.length; i++) {
        push();
        //translate(random(-100,100),random(-100,100),random(-100,100))
        translate(shapePositions[i].x, shapePositions[i].y, shapePositions[i].z, shapePositions[i].rx, shapePositions[i].rz);
        texture(offscreen);
        rotateX(frameCount / 20);
        rotateY(frameCount / 20);
        torus(50);
        //box(50);
        //cone(50);
        sphere(50);
        pop();
    }
}