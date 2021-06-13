const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1; 
var slingshot;

//the current editor is taking all variables as global
//if one wants to make variables local then they must define them

//line 12-26 was deleted since there is no sprites folder and no images to download

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,height,1200,20);

    //since we did not list any sides it turned out to be an ellipse
    //the third value is being taken as the radius 
    ball = new Ball(300, 150, 150, 150);
   

    
    //line 25 through 39 was deleted due to start of for loop 
    //column 1 
    box1 = new Box(500, 320,70,70);
    box2 = new Box(500, 320, 70, 70 );
    box3 = new Box(500, 320, 70,70);
    box4 = new Box(500, 320, 70,70);
    box5 = new Box(500, 320, 70,70);

    //column 2 
    box6 = new Box(600, 320, 70,70);
    box7 = new Box(600, 320, 70,70);
    box8 = new Box(600, 320, 70,70);
    box9 = new Box(600, 320, 70,70);
    box10 = new Box(600, 320, 70,70);
    box11 = new Box(600, 320, 70,70);
    box12 = new Box(600, 320, 70,70);
    box13 = new Box(600, 320, 70,70);










    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:150, y:0});
}

function draw(){
    //if conditions work for true and false 
    
    //34 was removed because backgroundImg was invalid
    background("pink");
   
    Engine.update(engine);
    //strokeWeight(4);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display()
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    ball.display();


    
    //log6.display();
    slingshot.display();  
    
   //score was deleted because wrecking ball is not an actual game 
}

//lines 50-102 all were deleted due to automatic functions relating to the bird class which was deleted 
//you cannot comment on an html file since html is different from javascript 
//index.html is not a normal html file since you cannot comment on it like a normal one coul