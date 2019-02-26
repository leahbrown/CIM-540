/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/

var slothBaby;
var slothAdult;
var slothFamily;
var slothSleeping;

var familyButton;
var babyButton;
var adultButton;
var sleepingButton;

var currentImage = 0;

function preload(){
  //download or load in assets like images, files, etc.
slothBaby = loadImage("assets/slothbaby.jpg");
slothAdult = loadImage("assets/slothadult.jpg");
slothFamily = loadImage("assets/slothfamily.jpg");
slothSleeping = loadImage("assets/slothsleeping.jpg");
}

function setup() {
  // put setup code here
  createCanvas(500,500);
babyButton = createButton("Baby sloth");
babyButton.position(10,40);
babyButton.mousePressed(function(){
  currentImage = 0;   
});
adultButton = createButton("Adult Sloth");
adultButton.position(100,40);
adultButton.mousePressed(function(){
  currentImage = 1;
});

familyButton = createButton("Sloth Family");
familyButton.position(200,40);
familyButton.mousePressed(function(){
  currentImage = 2;
});

sleepingButton = createButton("Sloth Sleeping");
sleepingButton.position(300,40);
sleepingButton.mousePressed(function(){
  currentImage = 3;//here

});

}

function draw() {
  // put drawing code here
if(currentImage == 0 ){
  image(slothBaby,0,20,slothBaby.width/2,slothBaby.height/2);
}else if(currentImage == 1){
  image(slothAdult,0,20,slothAdult.width/2,slothAdult.height/2);
}else if(currentImage == 2){
  image(slothFamily,0,20,slothFamily.width/2,slothFamily.height/2);
}else if(currentImage == 3){
  image(slothSleeping,0,20,slothSleeping.width/2,slothSleeping.height/2);
  }





}
