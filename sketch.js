const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas,playerBase, computerBase, player, computer ;



 function preload() {
 computerBaseImg = loadImage("./assets/base1.png");
 playerBaseImg = loadImage("./assets/base2.png");
 playerImg = loadImage("./assets/player.png");
 }


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  computerBase = new ComputerBase(width - 300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  computer = new Computer(width - 280, computerBase.body.position.y - 153, 50, 180);
}

function draw() {

  background(180);
  

  Engine.update(engine);
  playerBase.display();
  
  cpmputerBase.display();
  player.display();

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


}
