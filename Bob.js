class Bob {
    constructor(x, y, r) {
      var options = {
        isStatic: true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r/2, options);
      World.add(world, this.body);
    } 
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }
  