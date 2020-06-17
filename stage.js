class stage{
    constructor(x,y){
    var options = {
           isStatic:true
            }
    this.body = Bodies.rectangle(x,y,150,20,options);

    World.add(world,this.body); 
    }
    display(){
     // console.log("in display")
      var pos = this.body.position;
       
    rectMode(CENTER);
   fill(124,0,124);
    rect(pos.x,pos.y,150,20);
    
    
    }
    } 