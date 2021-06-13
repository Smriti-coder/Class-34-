class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 350
        }
       
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
            //pointA and pointB are important since they store the location
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            
            
           
                 //we deleted lots of lines of code because one line function was all we needed 
                 //for angry birds we had more to create a rubber-slingshot band effect
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                
               
               
            }
           
            
           
    
}