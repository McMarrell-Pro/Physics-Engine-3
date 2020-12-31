const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, box1, ground, box2, box3, box4, box5, bird, pig1, pig2, log1, log2, log3, log4;

function setup() {
createCanvas(1200,1000);

engine = Engine.create();
world = engine.world;
var options = {restitution: 1, density: 0.3}
box1 = new Box(700,950,70,70);
ground = new Ground(600,990,1200,20);
box2 = new Box(900,950,70,70);
box3 = new Box(700,700,70,70);
box4 = new Box(900,700,70,70);
box5 = new Box(800,700,70,70);
pig1 = new Pig(800,950);
pig2 = new Pig(800,800)

bird = new Bird(200,200);

log1 = new Log(800,915,300,PI/2);
log2 = new Log(800,765,300,PI/2);
log3 = new Log(710,615,300,PI/7);
log4 = new Log(890,615,300,-PI/7);
}

function draw() {
background("black");
Engine.update(engine);
box1.display();
ground.display();
box2.display();
box3.display();
box4.display();
box5.display();

bird.display();
pig1.display();
pig2.display();

log1.display();
log2.display();
log3.display();
log4.display();
}