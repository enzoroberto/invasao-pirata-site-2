class Cannon {
    constructor(x,y,w,h,a) {
        this.x = x;
        this.y = y ;
        this.largura = w;
        this.altura = h;
        this.angulo = a; 
        this.baseimg = loadImage("../assets/cannonBase.png");
        this.topoimg = loadImage("../assets/canon.png");
    }
    display() {
        
        console.log(this.angulo);

        if(keyIsDown(RIGHT_ARROW) && this.angulo < 54) {
            this.angulo = this.angulo + 1;
        }

        if(keyIsDown(LEFT_ARROW) && this.angulo > -54) {
            this.angulo = this.angulo - 1;
        }

        // desenhar topo

        push ();
            translate(this.x, this.y);
            rotate(this.angulo);
            imageMode(CENTER);
            image(this.topoimg, 0, 0, this.largura, this.altura);
        pop ();

    // desenhar a base

        image(this.baseimg,70, 40, 200, 200);

    
    }
    

}