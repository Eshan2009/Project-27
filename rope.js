class rope{
    constructor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.05,
            length : 10
    
        }
    
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope)
    
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}