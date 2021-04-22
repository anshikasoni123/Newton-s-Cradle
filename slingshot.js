class Slingshot 
{
   constructor(bodyA, bodyB)
   {

       var options = {bodyA : bodyA, bodyB : bodyB, stiffness : 0.04, length : 500}

       this.slingshot = Constraint.create(options)
       World.add(world, this.slingshot)
   }

   display()
   {
       var pointA = this.slingshot.bodyA.position;
       var pointB = this.slingshot.bodyB.position;

       strokeWeight(4);
       line(pointA.x, pointA.y, pointB.x, pointB.y);
   }
}