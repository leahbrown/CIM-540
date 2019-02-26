var showButton, hideButton;
var showingOrHiding;

function setup(){
createCanvas(500,500);

showButton = createButton("show");
showButton.position(10,40);
showButton.mousePressed(function(){
  //:fill(0);
  //:ellipse(width/2,height/2,100,100);
  showingOrHiding = 1;
});

hideButton = createButton("hide");
hideButton.position(100,40);
hideButton.mousePressed(function(){
  //set the action, what do you want the mouse press to do
showingOrHiding = 0;

});
}

function draw (){
background(255);


if(showingOrHiding == 1){
  fill(0);
  ellipse(width/2,height/2, 100,100);
}





}
