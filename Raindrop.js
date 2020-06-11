  
class Raindrop{
    constructor() {
      this.characters = "$#%&*@";
      this.x = random(0,width);
      this.y = random(0,height);
      }
      display(){
        textSize(random(12,40));
        stroke("white");
        var num = Math.round(random(0,this.characters.length - 1));
        this.displayCharacter = this.characters.charAt(num);
        text(this.displayCharacter,this.x,this.y); 
      }
reset(){
  this.y = this.y+random(1,20);
  if(this.y > height){
    this.y = 0;
  }
}
}

