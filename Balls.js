class ball {
    constructor(x,y,radius) {
      var options={
restitution : 0.3,
density:0.01,
friction:0.5
      }
     this.body = Bodies.circle(x,y,radius,options);
    
      this.radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("#E00883");
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  };