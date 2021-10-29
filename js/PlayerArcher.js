class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, -90);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    console.log(angle)

    if (keyIsDown(DOWN_ARROW) && angle < -73 ) {
      angle += 1;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && angle > -103) {
      angle -=1;
      Matter.Body.setAngle(this.body, angle);
    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

function KeyPressed() {
  if (keyCode === 32){
  var posX = playerArcher.body.position.x;
  var posY = playerArcher.body.position.y;
  var angle = playerArcher.body.angle;
  var arrow = new PlayerArrow(posX,posY,100,10,angle);

  Matter.Body.setAngle(arrow.body,angle);
  playerArrow.push(arrow);
  }
}
function keyRealeasd(){
if (keyCode === 32) {
 if (playerArrows.length) {
   var angle = playerArcher.body.angle;
   playerArrow[playerArrows.length-1].shoot(angle);
 }
}
}

