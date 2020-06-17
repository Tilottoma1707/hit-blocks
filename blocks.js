class blocks{
     constructor(x,y,){
        var options = {
            isStatic:true
             }
     this.body = Bodies.rectangle(x,y,30,30);
     this.Visiblity = 255;
     World.add(world,this.body); 
    // this.image = loadImage("../butterfly image.jpg")
     }
     display(){
      console.log(this.body.speed);
      if(this.body.speed < 3){
       
      
       //} else{
      //  World.remove(world, this.body);
        push();
        var pos =this.body.position;
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(pos.x,pos.y,30,30)
      // imageMode(CENTER)
       //image(this.image, this.body.position.x,this.body.position.y, 30,30);


        pop();
        //fill(223,1,119)
     }
    // }
     
     }
     /*score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  */ }
        
     
    