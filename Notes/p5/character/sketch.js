//global variables
var backgroundColor ="blue"; //strings
var earOffset = 10;
function setup() {
  // put setup code here
  createCanvas(500,500);
  background("grey");
console.log(backgroundColor);
}


function draw() {
  strokeWeight(1);
  fill(255);
  background(backgroundColor);

  //eye
  //click
  function mousePressed(){
    backgroundColor = "blue";
  }

  function mouseReleased(){
    backgroundColor = "white";
  }

  ellipse(155,175,25,30);

  //pupil

  ellipse(150,175,10,10);

  //head
  ellipse(200,200,100,100);

  //mouth
rect(100,200,75,20);
rect(100,230,75,10);

//nose
ellipse(100,200,10,10);
strokeWeight(10);
point(100,200);
strokeWeight(1);
  //eyes
  ellipse(170,175,25,30);
  //pupil
  ellipse(165,175,10,10);

  //neck
  rect(175,250,50,50);
  //body
  rect(200,275,150,100,10);
  //ears
  triangle(175,150,200,100,200,150);
    triangle(175 + 10,150,200 + 10,100,200 + 10,150);
    //tail
    strokeWeight(15);
    line(350,275,350+50,275-50);

    strokeWeight(5);

    //legs
    noFill();
    angleMode(DEGREES);
    arc(200,400,50,50,135,270);
    arc(225,400,50,50,135,270);
    arc(325,400,50,50,135,270);
    arc(350,400,50,50,135,270);











  // put drawing code here
}
