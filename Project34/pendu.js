
class bob
{
    constructor(x,y,r)
    {
       var options={
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop: 1,
            inertia: Infinity
        }

       this.body=Bodies.circle(x,y,r,options);

       this.radius=r;
       this.x=x;
       this.y=y;
       World.add(world,this.body);
    }
    display()
    {
        /*imageMode(RADIUS); 
        image(this.image,this.x,this.y,this.radius, this.radius); */
        var paperpos=this.body.position;
        var angle=this.body.angle;
        
        push() ;
        translate(paperpos.x, paperpos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("white")
        fill("black");
        ellipseMode(RADIUS);        
        ellipse(0,0,this.radius,this.radius); 
        
        pop() ;
    }
}