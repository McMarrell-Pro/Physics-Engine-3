class Box{
constructor(x,y,width,height){
var options = {restitution: 1.15, density: 1};
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);
}

display(){
    fill("yellow");
    push();
    rectMode(CENTER);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rect(0,0,this.width,this.height);
    pop();
}

}