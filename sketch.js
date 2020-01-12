var graphics;
var discoball;
var x = 20;
var y = 30;

function preload(){

  discoball = loadImage("assets/disco.jpg");

}

function setup() {

  createCanvas(windowWidth,windowHeight, WEBGL);
  angleMode(DEGREES);

  graphics = createGraphics(300, 300);
  graphics.background("blue");

}

function draw() {

  ortho();
  camera(mouseX - width / 2, mouseY - height / 2, -500, 0, 0, 0, 0, 1, 0);

  ambientLight(200, 200, 200);
  directionalLight(255, 255, 255, 0, 1, 0);
  pointLight(0,255,255,mouseX, mouseY);

  //graphics.ellipse(mouseX, mouseY, 20);

  graphics.noStroke();

  for (var i = 0; i< graphics.height; i +=10) {
    graphics.fill(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), random(255) );
    graphics.rect(0, i, graphics.width, 10);
  }

  if (keyIsDown(LEFT_ARROW)) {
    x -= 3;
    ambientLight(0, 200, 200);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 3;
    ambientLight(250, 0, 200);
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 3;
    ambientLight(150, 100, 0);
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 3;
    ambientLight(0, 0, 250);
  }

  if (mouseX > width/2) {

      texture(discoball);
      background(0);

    } else {

        texture(graphics);
        background("#d0e8ef");

     }

  noStroke();
  translate(x,y);
  sphere(100);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
