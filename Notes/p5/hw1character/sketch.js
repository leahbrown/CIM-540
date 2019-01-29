//global variables
var backgroundColor ="gray";
var earOffset = 30;
var wings = 365;
var wingsWidth = 80;
var wingsHeight = 115;

var bodyColor = "brown";
var bodyParts= "";

var innerBodyColor = "white";

function setup() {
  // put setup code here
  createCanvas(500,500);
  background("gray");

}


function draw() {
  strokeWeight(3);




fill(bodyColor);


  //pupil

  //wings
  ellipse(210,wings,wingsWidth,wingsHeight);
  ellipse(290,wings,wingsWidth,wingsHeight);
  //legs
rect(260,400,20,50);
rect(215,400,20,50);
  //body
fill(innerBodyColor);
  ellipse(250,360,135,125);
//ears
triangle(250,250,200,100,200,150);
triangle(250 + earOffset,250,200 + earOffset,100,200 + earOffset,150);
fill(bodyColor);

  //head
  ellipse(250,250,100,100);

  //mouth

  fill("red");

//nose
ellipse(248,273,10,20);
  //eyes
  fill(innerBodyColor);

ellipse(225,240,20,30);
ellipse(265,240,20,30);
  //pupil
fill("black");
ellipse(230,245,10,10);
ellipse(270,245,10,10);

  //neck



    //wings

    ellipse(225,);













  // put drawing code here
}
