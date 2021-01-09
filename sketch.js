var car1,car2,car3;
var wall1,wall2,wall3;
var bord1,bord2,bord3,bord4;


function setup() {
  createCanvas(800,500);
  car2 = createSprite(50, 300, 50, 50);
  car2.velocityX = 30;
  car2.weight = 800;
  car2.shapeColor = "white";
  car1 = createSprite(50,200,50,50);
  car1.velocityX = 20;
  car1.weight = 1400;
  car1.shapeColor = "white";
  car3 = createSprite(50,400,50,50);
  car3.velocityX = 50; 
  car3.weight = 100;
  car3.shapeColor = "white";
  wall1 = createSprite(690,200,20,100);
  wall2 = createSprite(690,300,20,100);
  wall3 = createSprite(690,400,20.100);
  bord1 = createSprite(350,150,700,20);
  bord2 = createSprite(350,250,700,20);
  bord3 = createSprite(350,350,700,20);
  bord4 = createSprite(350,450,700,20);
}

function draw() {
  background(0);  
  drawSprites();
}