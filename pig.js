class Pig{
constructor(x,y){
var options = {restitution: 10, density: 100}
this.body = Bodies.rectangle(x,y,50,50);
this.width = 50;
this.height = 50;
World.add(world,this.body);

}
display(){
fill("lightgreen");
push();
rectMode(CENTER);
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
rect(0,0,this.width,this.height);
pop();

}


}