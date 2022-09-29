class Cannonball {

    constructor(x,y) {

        var options = {
            isStatic: true
          }
        this.raio = 30;
        this.body = Bodies.circle(x, y, this.raio, options);
        this.ballImg = loadImage("../assets/cannonball.png")
        World.add(world,this.body);
    }
    display () {
        var pos = this.body.position;
        push ();
            imageMode(CENTER);
            image(this.ballImg, pos.x, pos.y, this.raio, this.raio);
        pop();
    }
    shoot() {
        var newAngle = cannon.angulo - 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
    }
    remove (S) {
        setTimeout (() => {
             World.remove(world,this.body);
             delete balls[S];
        },2000 );
        
     }
 }
 