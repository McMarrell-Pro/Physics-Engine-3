class Bird{
constructor(x,y){
var options = {restitution: 1, density: 5}
this.body = Bodies.rectangle(x,y,50,50);
this.width = 50;
this.height = 50;
World.add(world,this.body);

}
display(){
    fill("red");
    push();
    rectMode(CENTER);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop();
}

}