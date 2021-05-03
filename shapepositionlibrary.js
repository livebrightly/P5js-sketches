

function setup() {
    createCanvas(1280, 720, WEBGL);
    offscreen = createGraphics(400, 400);

    for (var i = 0; i < 50; i++) {
        shapePositions[i] = {
            x: random(-200, 200),
            y: random(-200, 200),
            z: random(-200, 200),
            rx: random(30, 40),
            rz: random(30, 50)
        }
    }
console.log(shapePositions);
}

