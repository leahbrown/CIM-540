var backgroundColor = "white";
var eyeposX = 0;
var eyeposY = 0;
var eyeOffset = 20;
var eyeSize = 20;
var instruction = "Don't cross the line!";


function setup() {
  // put setup code here
  createCanvas(500,500);
  eyeposX = width/2;
  eyeposY = 100;
}

function draw() {
  // put drawing code here
  background(backgroundColor);
  text(instruction,20,20);

  line(0,height/2,width,height/2);
  eyeposX = mouseX;
  eyeposY = mouseY;
  ellipse(width/2, height/2,10,10);
  ellipse(mouseX,mouseY,10,10);
  point(eyeposX,eyeposY);
  ellipse(eyeposX - eyeOffset,eyeposY,eyeSize,eyeSize);
  ellipse(eyeposX + eyeOffset, eyeposY, eyeSize, eyeSize);

if(mouseY > height/2){
  console.log("Below line");
  angleMode(DEGREES);
  arc(eyeposX,eyeposY + 100,100,100,180,0);
}

if(mouseY < height/2){console.log("Above line");
angleMode(DEGREES);
arc(eyeposX,eyeposY + 100,100,100,0,180);}

}
function mousePressed(){
  backgroundColor = "blue";
}

function mouseReleased(){
  backgroundColor = "white";
}
function keyPressed(){
  console.log("letter: " + key + " keycode: " + keyCode);
  if(key == 'a'){
    console.log("the letter is a");
  }else if(key == 'b'){
    backgroundColor = "blue";
  }else if(key == 'r'){
    backgroundColor = "red";
  }else{
    backgroundColor = "green";
  }

  if(keyCode == 65){
    console.log("the keycode is a");
  }
}


















//end of draw loop
