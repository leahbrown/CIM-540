var dog1;
var dog2;

var brownDog;
var blackDog;

var dog1X = 0;
var dog2X = 0;

var speed1 = 0;
var speed2 = 0;

var startRace = false;

var finishLineLocation = 500;

var finishLine;

var startButton;
var resetButton;


var startTimer = false;
var prevTimer = 0;
var interval = 3000;

var avaWins = "Ava Wins!"
var jimmyWins = "Jimmy Wins!"
function preload(){
  dog1 = loadImage("assets/dog1.png");
  dog2 = loadImage("assets/dog2.png");
  finishLine = loadImage("assets/finishLine.png");
  outside = loadImage("assets/outside.jpeg");
}


function setup() {
  // put setup code here
  createCanvas(700,700);

  startButton = createButton("Start");
  startButton.position(10,40);
  startButton.mousePressed(function(){
    speed1 = random(0,5);
    speed2 = random(0,5);
    startRace = true;
  });
  resetButton = createButton("Reset");
  resetButton.position(100,40);
  resetButton.mousePressed(function(){
    dog1X = 0;
    dog2X =0;
  });



}

function draw() {
  // put drawing code here
  background(255);


  if(startRace == true){
    dog1X = dog1X + random(0,5);
    dog2X = dog2X +random(0,5);
  }

  if(dog1X > finishLineLocation){
      startRace = false;

      if(startTimer == true){

      text(jimmyWins, 375,225);
    if(millis() - prevTimer >= interval){
    startTimer = false;
    prevTimer = millis();
    }
    }
  }
  if(dog2X > finishLineLocation){
    startRace = false;

      if(startTimer == true){

      text(avaWins, width/2,height/2);
      if(millis() - prevTimer >= interval){
      startTimer = false;
      prevTimer = millis();
      }
      }

  }

  //timer formula
  startTimer = true;
  prevTimer = millis();
  //reset dog position




  image(finishLine,450,0);
  image(dog1,dog1X,60,dog1.width/2,dog1.height/2);
  text ("Jimmy",30,225);
  image(dog2,dog2X,220,dog2.width/2,dog2.height/2);
  text ("Ava",30,385);

}
