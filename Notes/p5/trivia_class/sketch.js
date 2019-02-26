var questions = ["Is Iceland always covered in ice?","What ocean lies east of the US?"];
var options = ["1) true 2) false","1) pacific 2) indian 3) eastern 4) atlantic "];
var answers = [2,4];

var answerCorrect = "";

var currentOption = -1;

var currentQuestion = 0;

var button1, button2, button3, button4;




function setup() {
  // put setup code here


  createCanvas (400,400);

  button1 = createButton("1");
  button1.position(10,300);
  button1.mousePressed(function(){
  currentOption =1;
  });
  button2 = createButton("2");
  button2.position(50,300);
  button2.mousePressed(function(){
  currentOption =2;
  });
  button3 = createButton("3");
  button3.position(100,300);
  button3.mousePressed(function(){
  currentOption =3;
  });
  button4 = createButton("4");
  button4.position(150,300);
  button4.mousePressed(function(){
  currentOption =4;
  });

}

function draw() {
  // put drawing code here
  background(255);
  console.log(currentOption);
  text(questions[currentQuestion], 20,100);
  text(options[currentQuestion], 20,150);
  text(answerCorrect, 20,300);

  if(currentOption != -1){

    if(currentOption == answers[currentQuestion]){
      console.log("correct");
      answerCorrect = "Correct!";
      currentQuestion = currentQuestion + 1;
      if(currentQuestion>= questions.length){
      currentQuestion = 0;
      }

    }else{
      console.log("incorrect");
      answerCorrect = "Try Again!";
    }
    currentOption =-1;
  };
}
