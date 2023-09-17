function setup() {
    createCanvas(750, 900)
    background(241,243,242)
}

function draw() {
    fill(243,184,27)
    strokeWeight(0)
    rect(400, 550, 200, 200)
    quad(190, 250, 288, 128, 340, 170, 240, 288)


    fill("black")
    quad(460, 460, 640, 350, 680, 410, 500, 520)
    quad(215, 400, 320, 360, 350, 410, 255, 460)

    fill (24,13,95)
    quad(125, 420, 355, 185, 380, 200, 150, 440)

    fill("red")
    quad(240, 490, 480, 358, 520, 425, 280, 565)
}
