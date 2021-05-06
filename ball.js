class Ball {
    constructor(x, y,radius) {
      var options = {
          'restitution':1,
          'friction':0,
          'density':1.5
      }
      this.body = Bodies.circle(x, y,radius/2);
      this.r=radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      fill ("purple")
      circle(pos.x,pos.y,this.r);
      
    }
  };
  