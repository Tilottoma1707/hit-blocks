const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1;
//var score = 0;

function setup() {
  console.log("in setup")
  createCanvas(800,800);
  engine = Engine.create();
   world = engine.world;

   // ball1= Bodies.rectangle(200,200,20,20);
   // World.add(world,ball1)
   ball1 = new ball(100,350);
 // ball2 = new ball(100,600)
  /*console.log("after ball")*/
  ground = new Ground(600,height,1200,20);
  supporter1 = new supporter(100,450,50,10);
  supporter2 = new supporter(100,480,10,50);
  supporter3 = new supporter(100,500,50,10);
  stick1 = new stick(100,430,5,25);
  stick2 = new stick(120,465,30,5);
  stick3 = new stick(80,470,30,5);
  stick4 = new stick(120,480,30,5);
  stick5 = new stick(80,485,30,5);
  stage1 = new stage(500,400);
  stage2 = new stage(500,600);
  block1 = new blocks(440,275);
  block2 = new blocks(480,275);
  block3 = new blocks(520,275);
  block4 = new blocks(560,275);
  block5 = new blocks(440,575);
  block6 = new blocks(480,575);
  block7 = new blocks(520,575);
  block8 = new blocks(560,575);
  block9 = new blocks(460,240);
  block10 = new blocks(500,240);
  block11 = new blocks(540,240);
  block12 = new blocks(460,542);
  block13 = new blocks(500,542);
  block14 = new blocks(540,542);
  block15 = new blocks(520,220);
  block16 = new blocks(480,220);
  block17 = new blocks(500,190);
  block18 = new blocks(480,500);
  block19 = new blocks(520,500);
  block20 = new blocks(500,480);
 // ball1.velocityx = stick1.velocityx;
//block1.fill("171,31,252");
  fix = new fixShot(ball1.body,{x:100,y:350});
 // fix = new fixShot(ball2.body,{X:100,y:600});
}

function draw() {
  //console.log("in draw")
  background(0);
  noStroke();
       // textSize(35)
        //fill("white")
        //text("Score  " + score, width-500, 50)

  Engine.update(engine);
  //rect(this.ball1.position.x,this.ball1.position.y,20,20);
  ball1.display();
  //ball2.display();
  ground.display();
  supporter1.display();
  supporter2.display();
  supporter3.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stage1.display();
  stage2.display();
   fix.display();
   block1.display();
  // block1.score();
   block2.display();
  // block2.score();
   block3.display();
   //block3.score();
   block4.display();
   //block4.score();
   block5.display();
   //block5.score();
   block6.display();
   //block6.score();
   block7.display();
   //block7.score();
   block8.display();
   //block8.score();
   block9.display();
   //block9.score();
   block10.display();
   //block10.score();
   block11.display();
   //block11.score();
   block12.display();
   //block12.score();
   block13.display();
   //block13.score();
   block14.display();
   //block14.score();
   block15.display();
   //block15.score();
   block16.display();
   //block16.score();
   block17.display();
   //block17.score();
   block18.display();
   //block18.score();
   block19.display();
   //block19.score();
   block20.display();
   //block20.score();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
  fix.fly();
}

function keyPressed(){
  if(keyCode === 32){
     fix.attach(ball1.body);
  }
}