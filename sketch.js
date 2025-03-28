function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("pink");
  fill("orange");
  circle(200, 200, 300); // rosto
  fill("red");
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  line(150, 315, 250, 315); // boca
  fill("brown");
  triangle(200, 311, 170, 220, 220, 220); // nariz
  line(123, 100, 178, 100); // sobrancelha esquerda
  line(278, 100, 178, 100); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 999, 999, 130, 170);
  olhoY = map(mouseY, 999, 999, 130, 170);

  circle(olhoX, olhoY, 25); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 25); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
