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
var greet;
var submitButton;
var startTimer = false;
var prevTimer = 0;
var interval = 3000;

var avaWins = "Name 1 Wins!";
var jimmyWins = "Name 2 Wins!";
var input;
var input2;

var name1 = "Enter name";
var name2 = "Enter name";
function preload(){
  dog1 = loadImage("assets/dog1.png");
  dog2 = loadImage("assets/dog2.png");
  finishLine = loadImage("assets/finishLine.png");
  outside = loadImage("assets/outside.jpeg");
}


function setup() {
  // put setup code here
  createCanvas(700,700);
  input = createInput();
    input.position(20, 60);
    input.input(function(){
      name1 = input.value();
    });
    input2 = createInput();
      input2.position(20, 435);
      input2.input(function(){
        name2 = input2.value();
      });
  startButton = createButton("Start");
  startButton.position(10,20);
  startButton.mousePressed(function(){
    speed1 = random(0,5);
    speed2 = random(0,5);
    startRace = true;
  });
  resetButton = createButton("Reset");
  resetButton.position(100,20);
  resetButton.mousePressed(function(){
    dog1X = 0;
    dog2X =0;
  });



}

function draw() {
  // put drawing code here
  background(255);
//name1 = input.value();

  if(startRace == true){
    dog1X = dog1X + random(0,5);
    dog2X = dog2X +random(0,5);
    prevTimer = millis();
  }

  if(dog1X > finishLineLocation){
      startRace = false;


      text(name1, 375,225);
      if(millis() - prevTimer >= interval){
        dog1X = 0;
        dog2X = 0;
        prevTimer = millis();
      }

  }
  if(dog2X > finishLineLocation){
    startRace = false;

      text(name2, width/2,height/2);
      if(millis() - prevTimer >= interval){
        dog1X = 0;
        dog2X = 0;
        prevTimer = millis();
      }


  }

  image(finishLine,450,0);

  image(dog1,dog1X,80,dog1.width/2,dog1.height/2);
  text (name1,30,250);

  image(dog2,dog2X,250,dog2.width/2,dog2.height/2);
  text (name2,30,415);
  text("Click start and watch the puppies race!",20,15);

}
