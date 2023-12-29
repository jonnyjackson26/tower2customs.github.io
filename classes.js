function Player(x,y,width,height) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.velocityY=0;

    this.draw = function() {
        c.fillStyle="red";
        c.fillRect(this.x,this.y,this.width,this.height);
    }
    this.update = function() {
        //gravity
        this.y=this.y+this.velocityY;
        this.velocityY+=1;
        if(this.y+this.height>window.innerHeight) {
            this.y=window.innerHeight-this.height;
            this.velocityY=0;
        }
    }
    this.jump = function() {
        this.velocityY=-20;
    }
}



function Tube(x,topOpening,bottomOpening) {
    this.x=x;
    this.topOpening=topOpening;
    this.bottomOpening=bottomOpening;
    this.width=50;
    this.velocityX=-1;

    this.draw = function() {
        c.fillStyle="green";
        c.fillRect(this.x,0,this.width,this.topOpening);
        c.fillRect(this.x,this.bottomOpening,this.width,window.innerHeight-this.bottomOpening);
    }
    this.update = function() {
        this.x=this.x+this.velocityX;
    }
}