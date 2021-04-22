class Ball 
{
    constructor(x, y, radius)
    {
        var options = {density : 0.2}

        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;
        World.add(world, this.body)
    }

    display()
    {
        rectMode(CENTER)

        var pos = this.body.position;

        fill("red")
        ellipse(pos.x, pos.y, this.radius)
    }
}