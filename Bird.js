class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.array = []
  }

  display() {
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var pos = [this.body.position.x, this.body.position.y]
    this.array.push(pos)
    }
    for(var i = 0; i<this.array.length; i++){
      image(this.image1, this.array[i][0], this.array[i][1])
    }
    //this.body.position.y = mouseY;
    console.log(this.array)
    super.display();
  }
}
