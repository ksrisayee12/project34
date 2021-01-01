class chain 
{
    constructor(BodyA,BodyB)
    {
         var properties={bodyA:BodyA,
            pointB:BodyB,
            stiffness:1,
            angularstiffness:1,
            length:300
        }
         this.chain=constraint.create(properties);
        
         World.add(world,this.chain);
    }
    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(2)
        stroke ("white");
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}