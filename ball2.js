class Ball2
{
    constructor(x, y, radius)
    {
        var options = {density : 2.0}

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

        if(keyDown("up"))
        {
            pos.x = pos.x - 10;
            pos.y = pos.y - 10;
        }
    }
}