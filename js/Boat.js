class Boat {

    constructor (x, y, largura, altura, posB, animation) {
        
        this.body = Bodies.rectangle(x, y, largura, altura);

        this.largura = largura ;
        this.altura = altura;
        this.image = loadImage("../assets/boat.png");
        World.add(world, this.body);
        this.posB = posB;
        this.animation = animation;
        this.speed = 0.05;
        this.isbroken = false;
    }
    display () {
        var pos = this.body.position;
        var indice = floor(this.speed % this.animation.length);
        push ();
            imageMode(CENTER);
            image(this.animation [indice], pos.x, pos.y, this.largura, this.altura);
        pop ();
    }
    remove (S) {
        this.isbroken = true;
       setTimeout (() => {
            World.remove(world,boats[S].body);
            delete boats[S]; 
       },2000 );
       
    }
    animate () {
        this.speed = this.speed + 0.05;
    }
}
