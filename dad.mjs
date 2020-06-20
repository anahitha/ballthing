class Dad {
    constructor(x, y, radius, color) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic: true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.color = color;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      if(keyIsDown(87)){
        pos.y = pos.y-1;
    }
    if(keyIsDown(83)){
        pos.x = pos.x+1;
    }
    if(keyIsDown(65)){
        pos.x = pos.x-1;
    }
    if(keyIsDown(90)){
        pos.y = pos.y+1;
    }
      ellipseMode(RADIUS);
      ellipse(200, 200, this.radius, this.radius);
      fill(this.color);
      pop();
    }
  };