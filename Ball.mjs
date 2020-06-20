class ColourBall {
    constructor(x, y, radius, color) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.width = radius*2;
      this.height = radius*2;
      this.color = color;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(keyIsDown(UP_ARROW)){
        pos.y = pos.y-1.2;
    }
    if(keyIsDown(RIGHT_ARROW)){
        pos.x = pos.x+1.2;
    }
    if(keyIsDown(LEFT_ARROW)){
        pos.x = pos.x-1.2;
    }
    if(keyIsDown(DOWN_ARROW)){
        pos.y = pos.y+1.2;
    }
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      ellipse(200, 200, this.radius, this.radius);
      fill(this.color);
      pop();
    }
  };